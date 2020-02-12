import React from "react";
import { GeneralLayout } from "../../layouts";

interface RegisterScreenProps {
}

function ContactsScreen() {
  return (
    <div className={"flex flex-1 justify-center items-center bg-blue-200"}>
      <div className="rounded-lg overflow-hidden shadow-lg bg-white min-h-64 w-1/2">
        <p className="px-2 text-gray-600 mb-2 text-2xl font-thin px-4 pt-3">Contacts</p>
        <div className="px-2">
          <svg className="absolute z-50 mx-1 my-2 text-blue-400" width="24" height="24" viewBox="0 0 24 24"
               fill="currentColor"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.71 14H15.5L20.49 19L19 20.49L14 15.5V14.71L13.73 14.43C12.59 15.41 11.11 16 9.5 16C5.90997 16 3 13.09 3 9.5C3 5.90997 5.90997 3 9.5 3C13.09 3 16 5.90997 16 9.5C16 11.11 15.41 12.59 14.43 13.73L14.71 14ZM5 9.5C5 11.99 7.01001 14 9.5 14C11.99 14 14 11.99 14 9.5C14 7.01001 11.99 5 9.5 5C7.01001 5 5 7.01001 5 9.5Z"
              fill="black" fill-opacity="0.54"/>
          </svg>
          <input type="text" className="pl-8 px-1 py-2 bg-gray-200 w-full rounded relative"
                 placeholder="Search contacts"/>
        </div>
        <div className="py-5 px-3">
          <div className="flex justify-between px-2 py-2 hover:bg-blue-100 rounded cursor-pointer">
            <p className="flex text-gray-700">
              <svg className="h2 w-2 text-teal-500 mx-2" viewBox="0 0 8 8" fill="currentColor">
                <circle cx="4" cy="4" r="3"/>
              </svg>
              Taylor Otwell
            </p>
            <p className="text-gray-500 font-thin">Member</p>
          </div>
        </div>
        <div className="flex justify-end bg-gray-100 flex px-2 py-3">
          <button className="bg-blue-500 py-2 px-4 rounded text-white">Create</button>
        </div>
      </div>
    </div>
  );
}

export default ContactsScreen;
