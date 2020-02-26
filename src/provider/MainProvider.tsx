import React, { createContext, useEffect, useState } from "react";
import { ContactProps } from "../Types";
import ContactsAPI from "../basic-phone-contacts-api/ContactsAPI";

interface MainProviderProps {
  children: JSX.Element;
}

interface MainContextTypes {
  contacts: ContactProps[] | any;
  addContact: (contact: ContactProps) => void;
}

const USER_CONTEXT_INITIAL_VALUES = {
  contacts: [],
  addContact: (contact: ContactProps) => undefined,
};

export const MainContext = createContext<MainContextTypes>({
  ...USER_CONTEXT_INITIAL_VALUES,
});

function MainProvider({ children }: MainProviderProps) {

  const [contacts, setContacts] = useState<ContactProps[] | any>([]);

  useEffect(() => {
    let tempContact = ContactsAPI.getContacts("contacts");

    if (tempContact) {
      setContacts(JSON.parse(tempContact));
    }
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
      ContactsAPI.addContact("contacts", tempVal);
    } catch (e) {
      console.log(e);
    }
  }

  const providerValue = {
    contacts,
    addContact,
  };

  return (
    <MainContext.Provider value={providerValue}>
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
