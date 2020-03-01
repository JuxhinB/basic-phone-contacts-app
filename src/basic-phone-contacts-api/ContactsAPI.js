/**
 * @class ContactsAPI
 */
class ContactsAPI {

  /**
   * @constructor
   */
  constructor() {
    this.storage = this.checkStorageType();
    this.updateContacts = this.updateContacts.bind(this);
    this.getContacts = this.getContacts.bind(this);
  }

  /**
   * @method checkStorageType
   * @memberOf ContactsAPI
   * @return {Storage} LocalStorage | SessionStorage
   * @description Method used to decide which browser API to used, LocalStorage or SessionStorage.
   * In this case our main API is LocalStorage and SessionStorage is the fallback.
   */
  checkStorageType() {
    try {
      localStorage.setItem("test", "test");
      localStorage.removeItem("test");
      return localStorage;
    } catch (e) {
      return sessionStorage;
    }
  }

  /**
   * @method updateContacts
   * @memberOf ContactsAPI
   * @param key {String} Key to set in Storage
   * @param contacts {String} Stringified information of the contacts to set to the key.
   * @description Method used to save the contacts in the Storage.
   */
  updateContacts(key, contacts) {
    this.storage.setItem(key, contacts);
  }

  /**
   * @method getContacts
   * @memberOf ContactsAPI
   * @param key {String} Key to get from Storage
   * @return {string} Stringified value of the key.
   */
  getContacts(key) {
    return this.storage.getItem(key);
  }
}

let C = new ContactsAPI();

export default C;