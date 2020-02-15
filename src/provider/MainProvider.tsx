import React, { createContext, useEffect, useState } from "react";
import { ContactProps } from "../Types";
import ContactsAPI from "../basic-phone-contacts-api/ContactsAPI";

interface MainProviderProps {
  children: JSX.Element;
}

interface MainContextTypes {
  contacts: ContactProps[] | null;
}

const USER_CONTEXT_INITIAL_VALUES = {
  contacts: null,
};

export const MainContext = createContext<MainContextTypes>({
  ...USER_CONTEXT_INITIAL_VALUES,
});

function MainProvider({ children }: MainProviderProps) {

  const [contacts, setContacts] = useState<ContactProps[] | null>(null);

  useEffect(() => {
    let tempContact = ContactsAPI.getContacts("contacts");

    if (tempContact) {
      setContacts(JSON.parse(tempContact));
    }
  });

  const providerValue = {
    contacts,
  };

  return (
    <MainContext.Provider value={providerValue}>
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
