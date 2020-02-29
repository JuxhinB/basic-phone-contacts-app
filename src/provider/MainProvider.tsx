import React, { createContext, useEffect, useState } from "react";
import { ContactProps } from "../Types";
import ContactsAPI from "../basic-phone-contacts-api/ContactsAPI";

interface MainProviderProps {
  children: JSX.Element;
}

interface MainContextTypes {
  contacts: ContactProps[] | any;
  addContact: (contact: ContactProps) => void;
  removeContactDelete: (id: number) => void;
  editContact: (id: number, contact: ContactProps) => void;
}

const USER_CONTEXT_INITIAL_VALUES = {
  contacts: [],
  addContact: (contact: ContactProps) => undefined,
  removeContactDelete: (id: number) => undefined,
  editContact: (id: number, contact: ContactProps) => undefined,
};

export const MainContext = createContext<MainContextTypes>({
  ...USER_CONTEXT_INITIAL_VALUES,
});

function MainProvider({ children }: MainProviderProps) {

  const [contacts, setContacts] = useState<ContactProps[] | any>([]);

  useEffect(() => {
    updateContacts();
  }, []);

  function addContact(contact: ContactProps) {
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

  function removeContactDelete(id: number) {
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

  function editContact(id: number, info: ContactProps) {
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

  function updateContacts() {
    let tempContact = ContactsAPI.getContacts("contacts");

    if (tempContact) {
      setContacts(JSON.parse(tempContact));
    }
  }

  const providerValue = {
    contacts,
    addContact,
    removeContactDelete,
    editContact,
  };

  return (
    <MainContext.Provider value={providerValue}>
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
