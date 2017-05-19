/**
 *  THIS FILE IS AUTO GENERATED - SEE CONTRIBUTOR DOCUMENTATION
 */

/**
 * @class UserGroup
 */
class UserGroup {
  constructor(resourceJson, client) {
    Object.assign(this, resourceJson);
    this.client = client;
  }

  listGroupUsers(groupId, queryParameters) {
    return this.client.listGroupUsers(groupId, queryParameters);
  }

  delete() {
    return this.client.http.http(this._links.self.href, {
      method: 'delete'
    });
  }
}

module.exports = UserGroup;