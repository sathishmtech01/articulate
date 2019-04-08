import axios from 'axios';
import _ from 'lodash';
import {
  AUTH_GITHUB_KEY,
  AUTH_GITHUB_SECRET,
  SESSION_SECRET
} from '../../../common/env';

const uri = 'https://github.com';
const api = 'https://api.github.com';
const headers = {
  'User-Agent': 'hapi-bell-github'
};
export default {
  name: 'github',
  scheme: 'bell',
  options: {
    provider: {
      name: 'github',
      protocol: 'oauth2',
      useParamsAuth: true,
      auth: uri + '/login/oauth/authorize',
      token: uri + '/login/oauth/access_token',
      scope: ['user:email'],
      scopeSeparator: ',',
      headers,
      profile: async function (credentials, params, get) {
        try {
          const getOptions = {
            headers: {
              ...headers,
              Authorization: 'Bearer ' + params.access_token
            }
          };
          const profile = await get(`${api}/user`);
          const { data: emails } = await axios.get(`${api}/user/emails`, getOptions);
          const primaryEmail = _.find(emails, { primary: true });
          profile.email = _.get(primaryEmail, 'email', null);
          credentials.profile = {
            id: profile.id,
            username: profile.login,
            displayName: profile.name,
            email: profile.email,
            raw: profile
          };
        }
        catch (err) {
          console.error(err);
        }

      }
    },
    password: SESSION_SECRET, // Use something more secure in production
    clientId: AUTH_GITHUB_KEY,
    clientSecret: AUTH_GITHUB_SECRET,
    isSecure: false // Should be set to true (which is the default) in production
  }
};
