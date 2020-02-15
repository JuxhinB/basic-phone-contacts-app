import React, { useContext } from "react";
import { Contact, SearchContacts } from "./component";
import { ContactProps } from "../../Types";
import { MainContext } from "../../provider";

interface RegisterScreenProps {
}

function ContactsScreen(): JSX.Element {

  const { contacts } = useContext(MainContext);

  function createContact() {

  }

  return (
    <div className={"flex flex-1 justify-center items-center bg-blue-200"}>
      <div
        style={{
          maxWidth: 500,
        }}
        className="rounded-lg overflow-hidden shadow-lg bg-white min-h-64 w-full"
      >
        <p className="px-2 text-gray-600 mb-2 text-2xl font-thin px-4 pt-3">Contacts</p>
        <SearchContacts/>
        <div className="py-5 px-3">
          {
            contacts && contacts.map((contact: ContactProps, index: number) => {
              return (
                <Contact
                  key={`${index}`}
                  id={contact.id}
                  fl={contact.fl}
                  firstName={contact.firstName}
                  lastName={contact.lastName}
                  rel={contact.rel}
                  numbers={contact.numbers}
                />
              );
            })
          }

        </div>
        <div className="flex justify-end bg-gray-100 flex px-2 py-3">
          <button className="bg-blue-500 py-2 px-4 rounded text-white">Create</button>
        </div>
      </div>
    </div>
  );
}

export default ContactsScreen;
