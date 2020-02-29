/**
 * @class
 */

class ContactsAPI {

  constructor() {
    this.storage = this.checkStorageType();
    this.updateContacts = this.updateContacts.bind(this);
    this.getContacts = this.getContacts.bind(this);
  }

  checkStorageType() {
    try {
      localStorage.setItem("test", "test");
      localStorage.removeItem("test");
      return localStorage;
    } catch (e) {
      return sessionStorage;
    }
  }

  updateContacts(key, contacts) {
    this.storage.setItem(key, contacts);
  }

  getContacts(key) {
    return this.storage.getItem(key);
  }
}

let C = new ContactsAPI();

export default C;