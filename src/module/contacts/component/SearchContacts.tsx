import React from "react";

function SearchContacts() {
  return (
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
  );
}

export default SearchContacts;
