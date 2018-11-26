import Schmervice from 'schmervice';
import ConverseCallWebhook from './agent/agent.converse-call-webhook.service';
import ConverseCompileResponseTemplates from './agent/agent.converse-compile-response-templates.service';
import ConverseGenerateResponseFallback from './agent/agent.converse-generate-response-fallback.service';
import ConverseGenerateResponse from './agent/agent.converse-generate-response.service';
import ConverseUpdateContextFrames from './agent/agent.converse-update-context-frames.service';
import Converse from './agent/agent.converse.service';
import CreateDomain from './agent/agent.create-domain.service';
import CreateKeyword from './agent/agent.create-keyword.service';
import CreatePostFormat from './agent/agent.create-post-format.service';
import CreateWebhook from './agent/agent.create-webhook.service';
import Create from './agent/agent.create.service';
import Export from './agent/agent.export.service';
import FindAllSayings from './agent/agent.find-all-sayings.service';
import FindAllSettings from './agent/agent.find-all-settings.service';
import FindSettingByName from './agent/agent.find-setting-by-name.service';
import GetTrainedDomains from './agent/agent.get-trained-domains.service';
import Import from './agent/agent.import.service';
import IsModelUnique from './agent/agent.is-model-unique.service';
import ParseDucklingKeywords from './agent/agent.parse-duckling-keywords.service';
import ParseRasaKeywords from './agent/agent.parse-rasa-keywords.service';
import ParseRegexKeywords from './agent/agent.parse-regex-keywords.service';
import Parse from './agent/agent.parse.service';
import RemoveAction from './agent/agent.remove-action.service';
import RemoveDomain from './agent/agent.remove-domain.service';
import RemoveKeyword from './agent/agent.remove-keyword.service';
import RemovePostFormatInAction from './agent/agent.remove-post-format-in-action.service';
import RemovePostFormat from './agent/agent.remove-post-format.service';
import RemoveSayingInDomain from './agent/agent.remove-saying-in-domain.service';
import RemoveWebhookInAction from './agent/agent.remove-webhook-in-action.service';
import RemoveWebhook from './agent/agent.remove-webhook.service';
import Remove from './agent/agent.remove.service';
import TrainDomain from './agent/agent.train-domain.service';
import Train from './agent/agent.train.service';
import UpdateAllSettings from './agent/agent.update-all-settings.service';
import UpdateById from './agent/agent.update-by-id.service';
import UpdateDomain from './agent/agent.update-domain.service';
import UpdateKeyword from './agent/agent.update-keyword.service';
import UpdatePostFormat from './agent/agent.update-post-format.service';
import UpdateWebhook from './agent/agent.update-webhook.service';
import UpsertAction from './agent/agent.upsert-action.service';
import UpsertPostFormatInAction from './agent/agent.upsert-post-format-in-action.service';
import UpsertSayingInDomain from './agent/agent.upsert-saying-in-domain.service';
import UpsertWebhookInAction from './agent/agent.upsert-webhook-in-action.service';

module.exports = class AgentService extends Schmervice.Service {

    async create() {

        return await Create.apply(this, arguments);
    }

    async remove() {

        return await Remove.apply(this, arguments);
    }

    async createDomain() {

        return await CreateDomain.apply(this, arguments);
    }

    async upsertAction() {

        return await UpsertAction.apply(this, arguments);
    }

    async createKeyword() {

        return await CreateKeyword.apply(this, arguments);
    }

    async createPostFormat() {

        return await CreatePostFormat.apply(this, arguments);
    }

    async upsertPostFormatInAction() {

        return await UpsertPostFormatInAction.apply(this, arguments);
    }

    async updateById() {

        return await UpdateById.apply(this, arguments);
    }

    async removePostFormat() {

        return await RemovePostFormat.apply(this, arguments);
    }

    async removeWebhook() {

        return await RemoveWebhook.apply(this, arguments);
    }

    async updatePostFormat() {

        return await UpdatePostFormat.apply(this, arguments);
    }

    async createWebhook() {

        return await CreateWebhook.apply(this, arguments);
    }

    async findAllSayings() {

        return await FindAllSayings.apply(this, arguments);
    }

    async findAllSettings() {

        return await FindAllSettings.apply(this, arguments);
    }

    async findSettingByName() {

        return await FindSettingByName.apply(this, arguments);
    }

    async updateAllSettings() {

        return await UpdateAllSettings.apply(this, arguments);
    }

    async upsertSayingInDomain() {

        return await UpsertSayingInDomain.apply(this, arguments);
    }

    async updateKeyword() {

        return await UpdateKeyword.apply(this, arguments);
    }

    async updateDomain() {

        return await UpdateDomain.apply(this, arguments);
    }

    async upsertWebhookInAction() {

        return await UpsertWebhookInAction.apply(this, arguments);
    }

    async removeWebhookInAction() {

        return await RemoveWebhookInAction.apply(this, arguments);
    }

    async removePostFormatInAction() {

        return await RemovePostFormatInAction.apply(this, arguments);
    }

    async removeAction() {

        return await RemoveAction.apply(this, arguments);
    }

    async removeSayingInDomain() {

        return await RemoveSayingInDomain.apply(this, arguments);
    }

    async removeDomain() {

        return await RemoveDomain.apply(this, arguments);
    }

    async removeKeyword() {

        return await RemoveKeyword.apply(this, arguments);
    }

    async export() {

        return await Export.apply(this, arguments);
    }

    async import() {

        return await Import.apply(this, arguments);
    }

    async trainDomain() {

        return await TrainDomain.apply(this, arguments);
    }

    async train() {

        return await Train.apply(this, arguments);
    }

    async parse() {

        return await Parse.apply(this, arguments);
    }

    async parseRegexKeywords() {

        return await ParseRegexKeywords.apply(this, arguments);
    }

    async parseDucklingKeywords() {

        return await ParseDucklingKeywords.apply(this, arguments);
    }

    async parseRasaKeywords() {

        return await ParseRasaKeywords.apply(this, arguments);
    }

    async getTrainedDomains() {

        return await GetTrainedDomains.apply(this, arguments);
    }

    async updateWebhook() {

        return await UpdateWebhook.apply(this, arguments);
    }

    async converse() {

        return await Converse.apply(this, arguments);
    }

    async converseGenerateResponseFallback() {

        return await ConverseGenerateResponseFallback.apply(this, arguments);
    }

    async converseGenerateResponse() {

        return await ConverseGenerateResponse.apply(this, arguments);
    }

    async converseUpdateContextFrames() {

        return await ConverseUpdateContextFrames.apply(this, arguments);
    }

    async converseCompileResponseTemplates() {

        return await ConverseCompileResponseTemplates.apply(this, arguments);
    }

    async converseCallWebhook() {

        return await ConverseCallWebhook.apply(this, arguments);
    }

    async isModelUnique() {

        return await IsModelUnique.apply(this, arguments);
    }
};


