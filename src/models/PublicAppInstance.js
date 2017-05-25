/**
 *  THIS FILE IS AUTO GENERATED - SEE CONTRIBUTOR DOCUMENTATION
 */

/**
 * @class PublicAppInstance
 */
class PublicAppInstance {
  constructor(resourceJson, client) {
    Object.assign(this, resourceJson);
    this.client = client;
  }

  removeFromGroup(groupId) {
    return this.client.deleteGroupAppAssignment(this.id, groupId);
  }

  delete() {
    return this.client.http.delete(this._links.self.href);
  }
}

module.exports = PublicAppInstance;