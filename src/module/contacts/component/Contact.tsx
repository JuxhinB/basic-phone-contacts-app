import React from "react";
import { ContactProps } from "../../../types/AppTypes";

function Contact(
  {
    id,
    firstName,
    lastName,
    rel,
    numbers,
  }: ContactProps,
) {
  return (
    <div className="flex justify-between px-2 py-2 hover:bg-blue-100 rounded cursor-pointer">
      <p className="flex text-gray-700">
        <svg className="h2 w-2 text-gray-500 mx-2" viewBox="0 0 8 8" fill="currentColor">
          <circle cx="4" cy="4" r="3"/>
        </svg>
        {`${firstName} ${lastName}`}
      </p>
      <p className="text-gray-500 font-thin">{rel}</p>
    </div>
  );
}

export default Contact;
