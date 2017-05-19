/**
 *  THIS FILE IS AUTO GENERATED - SEE CONTRIBUTOR DOCUMENTATION
 */

const qs = require('querystring');

const Client = require('./client');
const Collection = require('./collection');
const models = require('./models');

/**
 * Auto-Generated extension of {@link BaseClient}, adding the operations as defined in the API JSON spec
 *
 * @class ApiClient
 * @extends {Client}
 */
class ApiClient extends Client {
  constructor(opts) {
    super(opts);
  }

  /**
  *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.filter]
   * @param {String} [queryParams.expand]
   * @param {String} [queryParams.includeNonDeleted]
   * @description
   * Enumerates apps added to your organization with pagination. A subset of apps can be returned that match a supported filter expression or query.
  */
  listAppInstances(queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this.http, url, models.PublicAppInstance);
  }
  /**
  *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.activate]
   * @description
   * Adds a new application to your Okta organization.
  */
  createAppInstance(postBody, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.PublicAppInstance(jsonRes, this));

  }
  /**
  *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @param {String} [queryParams.category]
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
  */
  listTypes(queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/user/types`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this.http, url, models.CVDAppUserProfile);
  }
  /**
  *
   * @param typeId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
  */
  getAppUserType(typeId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/user/types/${typeId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.CVDAppUserProfile(jsonRes, this));

  }
  /**
  *
   * @param typeId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  listSchemasForType(typeId) {
    let url = `${this.baseUrl}/api/v1/apps/user/types/${typeId}/schemas`;

    return new Collection(this.http, url, models.Schema);
  }
  /**
  *
   * @param typeId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  addSchemaToType(typeId, postBody) {
    let url = `${this.baseUrl}/api/v1/apps/user/types/${typeId}/schemas`;

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.Schema(jsonRes, this));

  }
  /**
  *
   * @param typeId {String}
   * @param schemaId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  updateSchemaByType(typeId, schemaId) {
    let url = `${this.baseUrl}/api/v1/apps/user/types/${typeId}/schemas/${schemaId}`;

    return request.then(jsonRes => new models.Schema(jsonRes, this));

  }
  /**
  *
   * @param appId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  deleteAppInstance(appId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}`;


  }
  /**
  *
   * @param appId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
  */
  getAppInstance(appId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.PublicAppInstance(jsonRes, this));

  }
  /**
  *
   * @param appId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  updateAppInstance(appId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}`;

    return request.then(jsonRes => new models.PublicAppInstance(jsonRes, this));

  }
  /**
  *
   * @param appId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.filter]
   * @description
  */
  listGroupCatalogForApp(appId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/catalog/groups`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this.http, url, models.UserGroup);
  }
  /**
  *
   * @param appId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.filter]
   * @description
  */
  listUserCatalogForApp(appId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/catalog/users`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this.http, url, models.User);
  }
  /**
  *
   * @param appId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getConnectorSettings(appId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/connector`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.ConnectorSettings(jsonRes, this));

  }
  /**
  *
   * @param appId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  upsertConnectorSettings(appId, postBody) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/connector`;

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.ConnectorSettings(jsonRes, this));

  }
  /**
  *
   * @param appId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  testConnectorSettings(appId, postBody) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/connector/test`;

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.ConnectorSettings(jsonRes, this));

  }
  /**
  *
   * @param appId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  listAppKeys(appId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/credentials/keys`;

    return new Collection(this.http, url, models.JsonWebKeyRSAMediated);
  }
  /**
  *
   * @param appId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.validityYears]
   * @description
  */
  generateKey(appId, postBody, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/credentials/keys/generate`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.JsonWebKeyRSAMediated(jsonRes, this));

  }
  /**
  *
   * @param appId {String}
   * @param keyId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getAppKey(appId, keyId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/credentials/keys/${keyId}`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.JsonWebKeyRSAMediated(jsonRes, this));

  }
  /**
  *
   * @param appId {String}
   * @param keyId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.targetAid]
   * @description
  */
  cloneKey(appId, keyId, postBody, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/credentials/keys/${keyId}/clone`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.JsonWebKeyRSAMediated(jsonRes, this));

  }
  /**
  *
   * @param appId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.expand]
   * @description
  */
  listGroupAppAssignments(appId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/groups`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this.http, url, models.GroupAppAssignment);
  }
  /**
  *
   * @param appId {String}
   * @param groupId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  deleteGroupAppAssignment(appId, groupId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/groups/${groupId}`;


  }
  /**
  *
   * @param appId {String}
   * @param groupId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
  */
  getGroupAppAssignment(appId, groupId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/groups/${groupId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.GroupAppAssignment(jsonRes, this));

  }
  /**
  *
   * @param appId {String}
   * @param groupId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  upsertGroupAppAssignment(appId, groupId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/groups/${groupId}`;

    return request.then(jsonRes => new models.GroupAppAssignment(jsonRes, this));

  }
  /**
  *
   * @param appId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  activateAppInstance(appId, postBody) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/lifecycle/activate`;

    const request = this.http.postJson(url, {
      body: postBody
    });

  }
  /**
  *
   * @param appId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  deactivateAppInstance(appId, postBody) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/lifecycle/deactivate`;

    const request = this.http.postJson(url, {
      body: postBody
    });

  }
  /**
  *
   * @param appId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  listCertificates(appId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/servercertificate`;

    return new Collection(this.http, url, models.UploadedCertificateMetadata);
  }
  /**
  *
   * @param appId {String}
   * @param certificateId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  deleteCertificate(appId, certificateId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/servercertificate/${certificateId}`;


  }
  /**
  *
   * @param appId {String}
   * @param certificateId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getCertificate(appId, certificateId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/servercertificate/${certificateId}`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.UploadedCertificateMetadata(jsonRes, this));

  }
  /**
  *
   * @param appId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getImportedSchema(appId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/user/imported/schema`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.Schema(jsonRes, this));

  }
  /**
  *
   * @param appId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  listSchemas(appId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/user/schemas`;

    return new Collection(this.http, url, models.Schema);
  }
  /**
  *
   * @param appId {String}
   * @param schemaId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getSchema(appId, schemaId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/user/schemas/${schemaId}`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.Schema(jsonRes, this));

  }
  /**
  *
   * @param appId {String}
   * @param schemaId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  updateSchema(appId, schemaId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/user/schemas/${schemaId}`;

    return request.then(jsonRes => new models.Schema(jsonRes, this));

  }
  /**
  *
   * @param appId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
  */
  listTypesForAppInstance(appId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/user/types`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this.http, url, models.CVDAppUserProfile);
  }
  /**
  *
   * @param appId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @param {String} [queryParams.userId]
   * @description
  */
  getEffectiveType(appId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/user/types/effective`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.CVDAppUserProfile(jsonRes, this));

  }
  /**
  *
   * @param appId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
  */
  getGroupAppAssignmentUserType(appId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/user/types/groups`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.CVDAppUserProfile(jsonRes, this));

  }
  /**
  *
   * @param appId {String}
   * @param typeId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
  */
  getType(appId, typeId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/user/types/${typeId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.CVDAppUserProfile(jsonRes, this));

  }
  /**
  *
   * @param appId {String}
   * @param typeId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
  */
  updateType(appId, typeId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/user/types/${typeId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return request.then(jsonRes => new models.CVDAppUserProfile(jsonRes, this));

  }
  /**
  *
   * @param appId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.query_scope]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.filter]
   * @param {String} [queryParams.expand]
   * @description
  */
  listAppUsers(appId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/users`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this.http, url, models.AppUser);
  }
  /**
  *
   * @param appId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  createAppUser(appId, postBody) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/users`;

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.AppUser(jsonRes, this));

  }
  /**
  *
   * @param appId {String}
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  deleteAppUser(appId, userId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/users/${userId}`;


  }
  /**
  *
   * @param appId {String}
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
  */
  getAppUser(appId, userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/users/${userId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.AppUser(jsonRes, this));

  }
  /**
  *
   * @param appId {String}
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  updateAppUser(appId, userId, postBody) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/users/${userId}`;

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.AppUser(jsonRes, this));

  }
  /**
  *
   * @param appId {String}
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  upsertAppUser(appId, userId) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/users/${userId}`;

    return request.then(jsonRes => new models.AppUser(jsonRes, this));

  }
  /**
  *
   * @param appId {String}
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  resetSyncedPassword(appId, userId, postBody) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/users/${userId}/credentials/cyclePassword`;

    const request = this.http.postJson(url, {
      body: postBody
    });

  }
  /**
  *
   * @param appId {String}
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  activateAppUser(appId, userId, postBody) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/users/${userId}/lifecycle/activate`;

    const request = this.http.postJson(url, {
      body: postBody
    });

  }
  /**
  *
   * @param appId {String}
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  deactivateAppUser(appId, userId, postBody) {
    let url = `${this.baseUrl}/api/v1/apps/${appId}/users/${userId}/lifecycle/deactivate`;

    const request = this.http.postJson(url, {
      body: postBody
    });

  }
  /**
  *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.filter]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.expand]
   * @description
   * Enumerates groups in your organization with pagination. A subset of groups can be returned that match a supported filter expression or query.
  */
  listGroups(queryParameters) {
    let url = `${this.baseUrl}/api/v1/groups`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this.http, url, models.UserGroup);
  }
  /**
  *
   * @description
   * Adds a new group with &#x60;OKTA_GROUP&#x60; type to your organization.
   * This endpoint does not have any query parameters at this time
  */
  createGroup(postBody) {
    let url = `${this.baseUrl}/api/v1/groups`;

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.UserGroup(jsonRes, this));

  }
  /**
  *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.after]
   * @description
   * Lists all group rules for your organization.
  */
  listRules(queryParameters) {
    let url = `${this.baseUrl}/api/v1/groups/rules`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this.http, url, models.GroupMembershipMediationRule);
  }
  /**
  *
   * @description
   * Creates a group rule to dynamically add users to the specified group if they match the condition
   * This endpoint does not have any query parameters at this time
  */
  createRule(postBody) {
    let url = `${this.baseUrl}/api/v1/groups/rules`;

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.GroupMembershipMediationRule(jsonRes, this));

  }
  /**
  *
   * @param ruleId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.removeUsers]
   * @description
  */
  deleteRule(ruleId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/groups/rules/${ruleId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';


  }
  /**
  *
   * @param ruleId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getRule(ruleId) {
    let url = `${this.baseUrl}/api/v1/groups/rules/${ruleId}`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.GroupMembershipMediationRule(jsonRes, this));

  }
  /**
  *
   * @param ruleId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  updateRule(ruleId) {
    let url = `${this.baseUrl}/api/v1/groups/rules/${ruleId}`;

    return request.then(jsonRes => new models.GroupMembershipMediationRule(jsonRes, this));

  }
  /**
  *
   * @param ruleId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  activateRule(ruleId, postBody) {
    let url = `${this.baseUrl}/api/v1/groups/rules/${ruleId}/lifecycle/activate`;

    const request = this.http.postJson(url, {
      body: postBody
    });

  }
  /**
  *
   * @param ruleId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  deactivateRule(ruleId, postBody) {
    let url = `${this.baseUrl}/api/v1/groups/rules/${ruleId}/lifecycle/deactivate`;

    const request = this.http.postJson(url, {
      body: postBody
    });

  }
  /**
  *
   * @param groupId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  deleteGroup(groupId) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}`;


  }
  /**
  *
   * @param groupId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
  */
  getGroup(groupId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.UserGroup(jsonRes, this));

  }
  /**
  *
   * @param groupId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  updateGroup(groupId) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}`;

    return request.then(jsonRes => new models.UserGroup(jsonRes, this));

  }
  /**
  *
   * @param groupId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
  */
  listApps(groupId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/apps`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this.http, url, models.PublicAppInstance);
  }
  /**
  *
   * @param groupId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.expand]
   * @description
  */
  listCatalogApps(groupId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/catalog/apps`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this.http, url, models.PublicAppInstance);
  }
  /**
  *
   * @param groupId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getUserGroupStats(groupId) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/stats`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.UserGroupStats(jsonRes, this));

  }
  /**
  *
   * @param groupId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
  */
  listGroupUsers(groupId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/users`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this.http, url, models.User);
  }
  /**
  *
   * @param groupId {String}
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  removeUserFromGroup(groupId, userId) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/users/${userId}`;


  }
  /**
  *
   * @param groupId {String}
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  addUserToGroup(groupId, userId) {
    let url = `${this.baseUrl}/api/v1/groups/${groupId}/users/${userId}`;


  }
  /**
  *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.type]
   * @description
  */
  listTrusts(queryParameters) {
    let url = `${this.baseUrl}/api/v1/idps`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this.http, url, models.IdpTrust);
  }
  /**
  *
   * @description
   * This endpoint does not have any query parameters at this time
  */
  createTrust(postBody) {
    let url = `${this.baseUrl}/api/v1/idps`;

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.IdpTrust(jsonRes, this));

  }
  /**
  *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
  */
  listIdpKeys(queryParameters) {
    let url = `${this.baseUrl}/api/v1/idps/credentials/keys`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this.http, url, models.JsonWebKeyRSAMediated);
  }
  /**
  *
   * @description
   * This endpoint does not have any query parameters at this time
  */
  createKey(postBody) {
    let url = `${this.baseUrl}/api/v1/idps/credentials/keys`;

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.JsonWebKeyRSAMediated(jsonRes, this));

  }
  /**
  *
   * @param keyId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  deleteKey(keyId) {
    let url = `${this.baseUrl}/api/v1/idps/credentials/keys/${keyId}`;


  }
  /**
  *
   * @param keyId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getIdpKey(keyId) {
    let url = `${this.baseUrl}/api/v1/idps/credentials/keys/${keyId}`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.JsonWebKeyRSAMediated(jsonRes, this));

  }
  /**
  *
   * @param keyId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  updateKey(keyId) {
    let url = `${this.baseUrl}/api/v1/idps/credentials/keys/${keyId}`;

    return request.then(jsonRes => new models.JsonWebKeyRSAMediated(jsonRes, this));

  }
  /**
  *
   * @param transactionId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getIdpTransaction(transactionId) {
    let url = `${this.baseUrl}/api/v1/idps/tx/${transactionId}`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.IdpTransaction(jsonRes, this));

  }
  /**
  *
   * @param transactionId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  cancelIdpTransaction(transactionId, postBody) {
    let url = `${this.baseUrl}/api/v1/idps/tx/${transactionId}/cancel`;

    const request = this.http.postJson(url, {
      body: postBody
    });

  }
  /**
  *
   * @param transactionId {String}
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  confirmIdpTransactionUser(transactionId, userId, postBody) {
    let url = `${this.baseUrl}/api/v1/idps/tx/${transactionId}/lifecycle/confirm/${userId}`;

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.IdpTransaction(jsonRes, this));

  }
  /**
  *
   * @param transactionId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  handleIdpTransaction(transactionId, postBody) {
    let url = `${this.baseUrl}/api/v1/idps/tx/${transactionId}/lifecycle/provision`;

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.IdpTransaction(jsonRes, this));

  }
  /**
  *
   * @param transactionId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getIdpTransactionSourceUser(transactionId) {
    let url = `${this.baseUrl}/api/v1/idps/tx/${transactionId}/source`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.IdpAppUser(jsonRes, this));

  }
  /**
  *
   * @param transactionId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getIdpTransactionTargetUser(transactionId) {
    let url = `${this.baseUrl}/api/v1/idps/tx/${transactionId}/target`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.IdpTargetUser(jsonRes, this));

  }
  /**
  *
   * @param transactionId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  listIdpTransactionMatchedUsers(transactionId) {
    let url = `${this.baseUrl}/api/v1/idps/tx/${transactionId}/users`;

    return new Collection(this.http, url, models.User);
  }
  /**
  *
   * @param idpId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  deleteTrust(idpId) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}`;


  }
  /**
  *
   * @param idpId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getTrust(idpId) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.IdpTrust(jsonRes, this));

  }
  /**
  *
   * @param idpId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  updateTrust(idpId) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}`;

    return request.then(jsonRes => new models.IdpTrust(jsonRes, this));

  }
  /**
  *
   * @param idpId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  listSigningKeys(idpId) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/credentials/keys`;

    return new Collection(this.http, url, models.JsonWebKeyRSAMediated);
  }
  /**
  *
   * @param idpId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.validityYears]
   * @description
  */
  generateSigningKey(idpId, postBody, queryParameters) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/credentials/keys/generate`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.JsonWebKeyRSAMediated(jsonRes, this));

  }
  /**
  *
   * @param idpId {String}
   * @param keyId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getSigningKey(idpId, keyId) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/credentials/keys/${keyId}`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.JsonWebKeyRSAMediated(jsonRes, this));

  }
  /**
  *
   * @param idpId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  activateIdpAppInstance(idpId, postBody) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/lifecycle/activate`;

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.IdpTrust(jsonRes, this));

  }
  /**
  *
   * @param idpId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  deactivateIdpAppInstance(idpId, postBody) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/lifecycle/deactivate`;

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.IdpTrust(jsonRes, this));

  }
  /**
  *
   * @param idpId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getServiceProviderMetadata(idpId) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/metadata.xml`;

    const request = this.http.getJson(url);

  }
  /**
  *
   * @param idpId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.expand]
   * @description
  */
  listIdpAppUsers(idpId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/users`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this.http, url, models.IdpAppUser);
  }
  /**
  *
   * @param idpId {String}
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  unlinkAppUser(idpId, userId) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/users/${userId}`;


  }
  /**
  *
   * @param idpId {String}
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getIdpAppUser(idpId, userId) {
    let url = `${this.baseUrl}/api/v1/idps/${idpId}/users/${userId}`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.IdpAppUser(jsonRes, this));

  }
  /**
  *
   * @param appId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getAppInstanceProfile(appId) {
    let url = `${this.baseUrl}/api/v1/meta/schemas/apps/${appId}`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.ProfileDefinition(jsonRes, this));

  }
  /**
  *
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getUserSchemas() {
    let url = `${this.baseUrl}/api/v1/meta/schemas/user/default`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.ProfileDefinition(jsonRes, this));

  }
  /**
  *
   * @description
   * This endpoint does not have any query parameters at this time
  */
  updatePartialUserSchemas(postBody) {
    let url = `${this.baseUrl}/api/v1/meta/schemas/user/default`;

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.ProfileDefinition(jsonRes, this));

  }
  /**
  *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.type]
   * @param {String} [queryParams.status]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.expand]
   * @description
  */
  getPolicies(queryParameters) {
    let url = `${this.baseUrl}/api/v1/policies`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.MediationPolicy(jsonRes, this));

  }
  /**
  *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.activate]
   * @description
  */
  createPolicy(postBody, queryParameters) {
    let url = `${this.baseUrl}/api/v1/policies`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.MediationPolicy(jsonRes, this));

  }
  /**
  *
   * @param policyId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  deletePolicy(policyId) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}`;


  }
  /**
  *
   * @param policyId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
  */
  getPolicy(policyId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.MediationPolicy(jsonRes, this));

  }
  /**
  *
   * @param policyId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  updatePolicy(policyId) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}`;

    return request.then(jsonRes => new models.MediationPolicy(jsonRes, this));

  }
  /**
  *
   * @param policyId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  activatePolicy(policyId, postBody) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/lifecycle/activate`;

    const request = this.http.postJson(url, {
      body: postBody
    });

  }
  /**
  *
   * @param policyId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  deactivatePolicy(policyId, postBody) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/lifecycle/deactivate`;

    const request = this.http.postJson(url, {
      body: postBody
    });

  }
  /**
  *
   * @param policyId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getPolicyRules(policyId) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/rules`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.MediationPolicyRule(jsonRes, this));

  }
  /**
  *
   * @param policyId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.activate]
   * @description
  */
  addPolicyRule(policyId, postBody, queryParameters) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/rules`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.MediationPolicyRule(jsonRes, this));

  }
  /**
  *
   * @param policyId {String}
   * @param ruleId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  deletePolicyRule(policyId, ruleId) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}`;


  }
  /**
  *
   * @param policyId {String}
   * @param ruleId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getPolicyRule(policyId, ruleId) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.MediationPolicyRule(jsonRes, this));

  }
  /**
  *
   * @param policyId {String}
   * @param ruleId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  updatePolicyRule(policyId, ruleId) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}`;

    return request.then(jsonRes => new models.MediationPolicyRule(jsonRes, this));

  }
  /**
  *
   * @param policyId {String}
   * @param ruleId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  activatePolicyRule(policyId, ruleId, postBody) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}/lifecycle/activate`;

    const request = this.http.postJson(url, {
      body: postBody
    });

  }
  /**
  *
   * @param policyId {String}
   * @param ruleId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  deactivatePolicyRule(policyId, ruleId, postBody) {
    let url = `${this.baseUrl}/api/v1/policies/${policyId}/rules/${ruleId}/lifecycle/deactivate`;

    const request = this.http.postJson(url, {
      body: postBody
    });

  }
  /**
  *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.templateType]
   * @description
  */
  listCustomSmsTemplates(queryParameters) {
    let url = `${this.baseUrl}/api/v1/templates/sms`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this.http, url, models.OrgCustomSmsMediationTemplate);
  }
  /**
  *
   * @description
   * This endpoint does not have any query parameters at this time
  */
  saveOrgCustomSmsTemplate(postBody) {
    let url = `${this.baseUrl}/api/v1/templates/sms`;

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.OrgCustomSmsMediationTemplate(jsonRes, this));

  }
  /**
  *
   * @param templateId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  deleteOrgCustomSmsTemplate(templateId) {
    let url = `${this.baseUrl}/api/v1/templates/sms/${templateId}`;


  }
  /**
  *
   * @param templateId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getOrgCustomSmsTemplate(templateId) {
    let url = `${this.baseUrl}/api/v1/templates/sms/${templateId}`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.OrgCustomSmsMediationTemplate(jsonRes, this));

  }
  /**
  *
   * @param templateId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  partialUpdateCustomSmsTemplate(templateId, postBody) {
    let url = `${this.baseUrl}/api/v1/templates/sms/${templateId}`;

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.OrgCustomSmsMediationTemplate(jsonRes, this));

  }
  /**
  *
   * @param templateId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  updateCustomSmsTemplate(templateId) {
    let url = `${this.baseUrl}/api/v1/templates/sms/${templateId}`;

    return request.then(jsonRes => new models.OrgCustomSmsMediationTemplate(jsonRes, this));

  }
  /**
  *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.filter]
   * @param {String} [queryParams.format]
   * @param {String} [queryParams.search]
   * @param {String} [queryParams.expand]
   * @description
   * Lists users in your organization with pagination in most cases.  A subset of users can be returned that match a supported filter expression or search criteria.
  */
  listUsers(queryParameters) {
    let url = `${this.baseUrl}/api/v1/users`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this.http, url, models.User);
  }
  /**
  *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.activate]
   * @param {String} [queryParams.provider]
   * @description
   * Creates a new user in your Okta organization with or without credentials.
  */
  createUser(postBody, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.User(jsonRes, this));

  }
  /**
  *
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  deactivateOrDeleteUser(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}`;


  }
  /**
  *
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getUser(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.User(jsonRes, this));

  }
  /**
  *
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  updateUserWithDefaults(userId, postBody) {
    let url = `${this.baseUrl}/api/v1/users/${userId}`;

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.User(jsonRes, this));

  }
  /**
  *
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  updateUser(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}`;

    return request.then(jsonRes => new models.User(jsonRes, this));

  }
  /**
  *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.showAll]
   * @description
  */
  listAppLinks(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/appLinks`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this.http, url, models.AppLink);
  }
  /**
  *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.expand]
   * @description
  */
  listUserCatalogApps(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/catalog/apps`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this.http, url, models.PublicAppInstance);
  }
  /**
  *
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  changePassword(userId, postBody) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/credentials/change_password`;

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.UserCredentials(jsonRes, this));

  }
  /**
  *
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  changeRecoveryQuestion(userId, postBody) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/credentials/change_recovery_question`;

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.UserCredentials(jsonRes, this));

  }
  /**
  *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.sendEmail]
   * @description
  */
  forgotPasswordWithRecoveryAnswer(userId, postBody, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/credentials/forgot_password`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.BaseCredentialsObject(jsonRes, this));

  }
  /**
  *
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  listUserFactors(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors`;

    return new Collection(this.http, url, models.UserFactor);
  }
  /**
  *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.updatePhone]
   * @param {String} [queryParams.templateId]
   * @description
  */
  enrollFactor(userId, postBody, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.UserFactor(jsonRes, this));

  }
  /**
  *
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  preAuth(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/authn`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.FactorActionResponse(jsonRes, this));

  }
  /**
  *
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  listFactorsCatalog(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/catalog`;

    return new Collection(this.http, url, models.FactorCatalogEntry);
  }
  /**
  *
   * @param userId {String}
   * @param userFactorId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  resetFactor(userId, userFactorId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/${userFactorId}`;


  }
  /**
  *
   * @param userId {String}
   * @param userFactorId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getFactor(userId, userFactorId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/${userFactorId}`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.UserFactor(jsonRes, this));

  }
  /**
  *
   * @param userId {String}
   * @param userFactorId {String}
   * @param deviceId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getFactorDevice(userId, userFactorId, deviceId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/${userFactorId}/devices/${deviceId}`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.FactorDevice(jsonRes, this));

  }
  /**
  *
   * @param userId {String}
   * @param userFactorId {String}
   * @param deviceId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  activateFactorDevice(userId, userFactorId, deviceId, postBody) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/${userFactorId}/devices/${deviceId}/lifecycle/activate`;

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.FactorDevice(jsonRes, this));

  }
  /**
  *
   * @param userId {String}
   * @param userFactorId {String}
   * @param oneTimeSessionToken {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  generateQRCodeImage(userId, userFactorId, oneTimeSessionToken) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/${userFactorId}/qr/${oneTimeSessionToken}`;

    const request = this.http.getJson(url);

  }
  /**
  *
   * @param userId {String}
   * @param userFactorId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.templateId]
   * @description
  */
  resendCode(userId, userFactorId, postBody, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/${userFactorId}/resend`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.UserFactor(jsonRes, this));

  }
  /**
  *
   * @param userId {String}
   * @param userFactorId {String}
   * @param transactionId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  cancelFactorTransaction(userId, userFactorId, transactionId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/${userFactorId}/transactions/${transactionId}`;


  }
  /**
  *
   * @param userId {String}
   * @param userFactorId {String}
   * @param transactionId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getFactorTransactionStatus(userId, userFactorId, transactionId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/${userFactorId}/transactions/${transactionId}`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.FactorVerificationResponse(jsonRes, this));

  }
  /**
  *
   * @param userId {String}
   * @param userFactorId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.templateId]
   * @description
  */
  authenticate(userId, userFactorId, postBody, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/factors/${userFactorId}/verify`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.FactorVerificationResponse(jsonRes, this));

  }
  /**
  *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
  */
  listUserGroups(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/groups`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this.http, url, models.UserGroup);
  }
  /**
  *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.sendEmail]
   * @description
  */
  activateUser(userId, postBody, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/activate`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.ActivationToken(jsonRes, this));

  }
  /**
  *
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  lifecycleDeactivateUser(userId, postBody) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/deactivate`;

    const request = this.http.postJson(url, {
      body: postBody
    });

  }
  /**
  *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.sendEmail]
   * @description
  */
  forgotPassword(userId, postBody, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/forgot_password`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.ResetPasswordToken(jsonRes, this));

  }
  /**
  *
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  resetAllFactors(userId, postBody) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/reset_factors`;

    const request = this.http.postJson(url, {
      body: postBody
    });

  }
  /**
  *
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  suspendUser(userId, postBody) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/suspend`;

    const request = this.http.postJson(url, {
      body: postBody
    });

  }
  /**
  *
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  unlockUser(userId, postBody) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/unlock`;

    const request = this.http.postJson(url, {
      body: postBody
    });

  }
  /**
  *
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  unsuspendUser(userId, postBody) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/lifecycle/unsuspend`;

    const request = this.http.postJson(url, {
      body: postBody
    });

  }
  /**
  *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
  */
  listAssignedRoles(userId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this.http, url, models.MediationRoleAssignment);
  }
  /**
  *
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  assignRoleToUser(userId, postBody) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles`;

    const request = this.http.postJson(url, {
      body: postBody
    });
    return request.then(jsonRes => new models.MediationRoleAssignment(jsonRes, this));

  }
  /**
  *
   * @param userId {String}
   * @param roleId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  unassignRoleFromUser(userId, roleId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}`;


  }
  /**
  *
   * @param userId {String}
   * @param roleId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  getRoleForUser(userId, roleId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}`;

    const request = this.http.getJson(url);
    return request.then(jsonRes => new models.MediationRoleAssignment(jsonRes, this));

  }
  /**
  *
   * @param userId {String}
   * @param roleId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
  */
  listGroupTargetsForRole(userId, roleId, queryParameters) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/groups`;
    const queryString = qs.stringify(queryParameters || {});

    url += queryString ? ('?' + queryString) : '';

    return new Collection(this.http, url, models.UserGroup);
  }
  /**
  *
   * @param userId {String}
   * @param roleId {String}
   * @param groupId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  removeGroupTargetFromRole(userId, roleId, groupId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/groups/${groupId}`;


  }
  /**
  *
   * @param userId {String}
   * @param roleId {String}
   * @param groupId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  addGroupTargetToRole(userId, roleId, groupId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/roles/${roleId}/targets/groups/${groupId}`;


  }
  /**
  *
   * @param userId {String}
   * @description
   * This endpoint does not have any query parameters at this time
  */
  clearUserSessions(userId) {
    let url = `${this.baseUrl}/api/v1/users/${userId}/sessions`;


  }

}

module.exports = ApiClient;