import React, { createContext, Dispatch, useEffect, useState } from "react";
import { ContactProps } from "../Types";
import ContactsAPI from "../basic-phone-contacts-api/ContactsAPI";

interface MainProviderProps {
  children: JSX.Element;
}

interface MainContextTypes {
  contacts: ContactProps[] | any;
  addContact: (contact: ContactProps) => void;
  removeContact: (id: number) => void;
  editContact: (id: number, contact: ContactProps) => void;
  searchStr: string | null,
  setSearchStr: Dispatch<string>;
}

const USER_CONTEXT_INITIAL_VALUES = {
  contacts: [],
  addContact: (contact: ContactProps) => undefined,
  removeContact: (id: number) => undefined,
  editContact: (id: number, contact: ContactProps) => undefined,
  searchStr: null,
  setSearchStr: (str: String) => undefined,
};

/**
 * @method createContext
 * @memberOf MainProvider
 * @description Hook used to initialize the context.
 */
export const MainContext = createContext<MainContextTypes>({
  ...USER_CONTEXT_INITIAL_VALUES,
});

/**
 * @class MainProvider
 * @param children {JSX.Element} JSX.Element
 * @returns JSX.Element Application's main context.
 * @description This is the main global context about the application.
 * Responsible for holding and editing the contacts list.
 */
function MainProvider({ children }: MainProviderProps) {

  const [contacts, setContacts] = useState<ContactProps[] | any>([]);
  const [searchStr, setSearchStr] = useState<string | null>(null);

  /**
   * @method useEffect
   * @memberOf MainProvider
   * @returns null
   * @description Hook used to initialize and filter contacts based on search
   */
  useEffect(() => {
    if (searchStr) {
      let tempContact = ContactsAPI.getContacts("contacts");
      if (tempContact) {
        const result = JSON.parse(tempContact).filter((contact: ContactProps) => {
          if (`${contact.firstName}${contact.lastName}`.includes(searchStr)) {
            return contact;
          }
        });
        setContacts(result);
      }
    } else {
      updateContacts();
    }
  }, [searchStr]);

  /**
   * @method addContact
   * @memberOf MainProvider
   * @param contact
   * @returns null
   * @description This method is used to add a new contact to the contacts list.
   */
  function addContact(contact: ContactProps):void {
    try {
      let tempVal = JSON.stringify(contacts);
      if (contacts && contacts.length) {
        setContacts([...contacts, contact]);
        tempVal = JSON.stringify([...contacts, contact]);
      } else {
        setContacts([contact]);
        tempVal = JSON.stringify([contact]);
      }
      ContactsAPI.updateContacts("contacts", tempVal);
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * @method removeContact
   * @memberOf MainProvider
   * @param id
   * @returns null
   * @description Method used to remove a contact by the list of contact selecting it by the id.
   */
  function removeContact(id: number):void {
    try {
      for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].id === id) {
          setContacts(contacts.splice(i, 1));
          ContactsAPI.updateContacts("contacts", JSON.stringify(contacts));
          updateContacts();
          return;
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * @method editContact
   * @memberOf MainProvider
   * @param id number Unique id of the contact
   * @param info ContactProps Whole modified contact information.
   * @returns null
   * @description Method used to edit an existing contact selecting it by the id.
   */
  function editContact(id: number, info: ContactProps):void {
    try {
      for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].id === id) {
          setContacts(contacts.splice(i, 1, info));
          ContactsAPI.updateContacts("contacts", JSON.stringify(contacts));
          updateContacts();
          return;
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * @method updateContacts
   * @memberOf MainProvider
   * @returns null
   * @description Method used to update the contact list from the storage.
   */
  function updateContacts():void {
    let tempContact = ContactsAPI.getContacts("contacts");

    if (tempContact) {
      setContacts(JSON.parse(tempContact));
    }
  }

  const providerValue = {
    contacts,
    addContact,
    removeContact,
    editContact,
    searchStr, setSearchStr,
  };

  return (
    <MainContext.Provider value={providerValue}>
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
