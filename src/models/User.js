/**
 *  THIS FILE IS AUTO GENERATED - SEE CONTRIBUTOR DOCUMENTATION
 */

/**
 * @class User
 */
class User {
  constructor(resourceJson, client) {
    Object.assign(this, resourceJson);
    this.client = client;
  }

  listGroups(queryParameters) {
    return this.client.listUserGroups(this.id, queryParameters);
  }
  activate(queryParameters) {
    return this.client.activateUser(this.id, queryParameters);
  }
  addToGroup(groupId) {
    return this.client.addUserToGroup(groupId, this.id);
  }
  deactivate() {
    return this.client.lifecycleDeactivateUser(this.id);
  }
  suspend() {
    return this.client.suspendUser(this.id);
  }
  unsuspend() {
    return this.client.unsuspendUser(this.id);
  }
  unlock() {
    return this.client.unlockUser(this.id);
  }
  forgotPassword(queryParameters) {
    return this.client.forgotPassword(this.id, queryParameters);
  }
  resetFactors() {
    return this.client.resetAllFactors(this.id);
  }

  delete() {
    return this.client.http.delete(this._links.self.href);
  }
}

module.exports = User;