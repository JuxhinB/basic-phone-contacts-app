import React from "react";
import { ContactProps } from "../../../Types";

/**
 * @class Contact
 * @param onClick {Event} Event delegated by parent to understand wether the element is clidked or not.
 * @param id {Number} Contact's id
 * @param fl {String} Contact's first letter of the name (purposed to be used to filter contacts by letters)
 * @param firstName {String} Contact's first name
 * @param lastName {String} Contact's last name
 * @param rel {String} Contacts's relation to user
 * @param numbers {NumberProps[]}
 * @return {JSX.Element} JSX.Element
 * @description  React Component. Component responsible.
 * @return {JSX.Element} JSX.Element
 */
function Contact(
  {
    onClick,
    id,
    fl,
    firstName,
    lastName,
    rel,
    numbers,
  }: ContactProps,
): JSX.Element {
  return (
    <div
      onClick={onClick}
      className={"flex flex-col hover:bg-blue-100 mb-1"}
    >
      <div className="flex justify-between px-2 py-2  rounded cursor-pointer">
        <p className="flex text-gray-700 font-bold">
          <svg className="h2 w-2 text-gray-500 mx-2" viewBox="0 0 8 8" fill="currentColor">
            <circle cx="4" cy="4" r="3"/>
          </svg>
          {`${firstName} ${lastName}`}
        </p>
        <p className="text-gray-500 font-thin">{rel}</p>
      </div>
      {
        numbers && numbers.length && numbers.map((number, index) => {
          return (
            <div key={`${index}`} className="flex justify-between px-2 py-2  rounded cursor-pointer">
              <p className="flex text-gray-600 capitalize text-sm">
                <svg className="h1 w-1 text-gray-500 mx-2" viewBox="0 0 8 8" fill="currentColor">
                  <circle cx="4" cy="4" r="3"/>
                </svg>
                {`${number.type} ${number.number}`}
              </p>
            </div>
          );
        })
      }
    </div>
  );
}

export default Contact;
