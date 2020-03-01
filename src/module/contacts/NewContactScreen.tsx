import React, { useContext, useState } from "react";
import moment from "moment";
import { MainContext } from "../../provider";
import { useHistory } from "react-router-dom";

/**
 * @class NewContactScreen
 * @description React Component. Screen holding the form and functions to enter
 * fields about the new contact.
 * @return {JSX.Element} JSX.Element
 */
function NewContactScreen(): JSX.Element {
  // context
  /**
   * @method useContext
   * @memberOf NewContactScreen
   * @description Hook used to get addContact method from MainContext.
   */
  const { addContact } = useContext(MainContext);
  // state
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [rel, setRel] = useState<string | null>("family");
  const [nrType, setNrType] = useState<string | null>("mobile");
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  let history = useHistory();

  /**
   * @method handleCreateContact
   * @memberOf NewContactScreen
   * @return null
   * @description Method used to format values from inputs and than add the new
   * contact using hook from context.
   */
  function handleCreateContact(): void {
    if (firstName && lastName && rel && phoneNumber && nrType) {
      addContact({
        id: moment().unix(),
        fl: firstName.charAt(0),
        firstName: firstName,
        lastName: lastName,
        rel: rel,
        numbers: [{
          type: nrType,
          number: phoneNumber,
        }],
      });
      history.goBack();
    }
  }

  return (
    <div className={"flex flex-1 justify-center items-center bg-blue-200"}>
      <div
        style={{
          maxWidth: 500,
        }}
        className="rounded-lg overflow-hidden shadow-lg bg-white min-h-64 w-full mx-4"
      >
        <p className="px-2 text-gray-600 mb-2 text-2xl font-thin px-4 pt-3">New Contact</p>
        <div className="py-5 px-3">

          <div className={"flex"}>
            <div className={"flex w-1/2"}>
              <input
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                className="px-3 py-2 bg-gray-200 flex-1 rounded relative mb-3 mr-1 w-full"
                placeholder="First Name"
              />
            </div>
            <div className={"flex w-1/2"}>
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                className="px-3 py-2 bg-gray-200 flex-1 rounded relative mb-3 ml-1 w-full"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className={"flex"}>
            <div className={"flex w-1/2 mb-3"}>
              <select
                onChange={(e) => {
                  setRel(e.target.value);
                }}
                className={"px-3 py-2 bg-gray-200 flex-1 rounded mr-1"}
              >
                <option value={"family"}>Family</option>
                <option value={"work"}>Work</option>
                <option value={"gym"}>Gym</option>
                <option value={"gym"}>School</option>
              </select>
            </div>
            <div className={"flex w-1/2 mb-3 pl-1"}>
              <select
                onChange={(e) => {
                  setNrType(e.target.value);
                }}
                className={"px-3 py-2 bg-gray-200 flex-1 rounded mr-1"}
              >
                <option value={"mobile"}>Mob</option>
                <option value={"home"}>Home</option>
              </select>
              <input
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                type="number"
                className="px-3 py-2 bg-gray-200 w-10/12 rounded"
                placeholder="Phone Number"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end bg-gray-100 flex px-2 py-3">
          <button
            onClick={handleCreateContact}
            className="bg-blue-500 py-2 px-4 rounded text-white"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewContactScreen;