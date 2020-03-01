import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ContactProps } from "../../Types";
import { MainContext } from "../../provider";

/**
 * @class ContactDetailsScreen
 * @description  React Component. Screen listing all the details for the user.
 * User details here are sent using react-router.
 * @return {JSX.Element} JSX.Element
 */
function ContactDetailsScreen() {
  //context
  /**
   * @method useContext
   * @memberOf ContactDetailsScreen
   * @description Hook used to get removeContact and editContact method from MainContext.
   */
  const { removeContact, editContact } = useContext(MainContext);
  // state
  const [info, setInfo] = useState<ContactProps | null>(null);

  let history = useHistory();

  /**
   * @method useEffect
   * @memberOf ContactDetailsScreen
   * @description Hook used to immediately read info from react-router and set it
   * to component's state.
   */
  useEffect(() => {
    setInfo(history.location.state as ContactProps);
    // eslint-disable-next-line
  }, []);

  /**
   * @method handleContactDelete
   * @memberOf ContactDetailsScreen
   * @return null
   * @description Method used to handle user's delete actions for a contact.
   */
  function handleContactDelete(): void {
    if (info) {
      removeContact(info.id);
      history.goBack();
    }
  }

  /**
   * @method handleContactEdit
   * @memberOf ContactDetailsScreen
   * @return null
   * @description Method used to handle user's edit actions for a contact.
   */
  function handleContactEdit(): void {
    if (info) {
      editContact(info.id, { ...info });
      history.goBack();
    }
  }

  /**
   *
   * @method handleNumberChange
   * @memberOf ContactDetailsScreen
   * @param action {String} Flag to understand which part of the number is edited.
   * Could be its type or the number itself.
   * @param value {String} New value to be replace the current one.
   * @param index {Number} Number position.
   * @return null
   * @description Method used to handle user's number change actions for a contact.
   */
  function handleNumberChange(action: "type" | "number", value: string, index: number): void {
    if (info) {
      let tempNum = JSON.parse(JSON.stringify(info.numbers));
      if (action === "type") {
        tempNum.splice(
          index,
          1,
          {
            type: value,
            number: info.numbers[index].number,
          },
        );
      } else if (action === "number") {
        tempNum.splice(
          index,
          1,
          {
            type: info.numbers[index].type,
            number: value,
          },
        );
      }
      setInfo({
        ...info,
        numbers: tempNum,
      });
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
        <p className="px-2 text-gray-600 mb-2 text-2xl font-thin px-4 pt-3">Details</p>
        {
          info && <div className="py-5 px-3">

            <div className={"flex"}>

              <div className={"flex w-1/2"}>
                <input
                  onChange={(e) => {
                    setInfo({ ...info, firstName: e.target.value });
                  }}
                  type="text"
                  className="w-full px-3 py-2 bg-gray-200 flex-1 rounded relative mb-3 mr-1"
                  value={info.firstName}
                  placeholder="First Name"
                />
              </div>

              <div className={"flex w-1/2"}>
                <input
                  onChange={(e) => {
                    setInfo({ ...info, lastName: e.target.value });
                  }}
                  type="text"
                  className="w-full px-3 py-2 bg-gray-200 flex-1 rounded relative mb-3 ml-1"
                  value={info?.lastName}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className={"flex"}>
              <div className={"flex w-1/2 mb-3"}>
                <select
                  onChange={(e) => {
                    setInfo({ ...info, rel: e.target.value });
                  }}
                  value={info?.rel}
                  className={"px-3 py-2 bg-gray-200 flex-1 rounded mr-1"}
                >
                  <option value={"family"}>Family</option>
                  <option value={"work"}>Work</option>
                  <option value={"gym"}>Gym</option>
                  <option value={"gym"}>School</option>
                </select>
              </div>
              {
                info && info.numbers && info.numbers.map((number, index) => {
                  return (
                    <div key={`${index}`} className={"flex w-1/2 mb-3 pl-1"}>
                      <select
                        onChange={(e) => {
                          handleNumberChange("type", e.target.value, index);
                        }}
                        className={"px-3 py-2 bg-gray-200 flex-1 rounded mr-1"}
                        value={number.type}
                      >
                        <option value={"mobile"}>Mob</option>
                        <option value={"home"}>Home</option>
                      </select>
                      <input
                        onChange={(e) => {
                          handleNumberChange("number", e.target.value, index);
                        }}
                        type="number"
                        className="px-3 py-2 bg-gray-200 w-10/12 rounded"
                        placeholder="Phone Number"
                        value={number.number}
                      />
                    </div>
                  );
                })
              }
            </div>
          </div>}

        <div className="flex justify-between bg-gray-100 flex px-2 py-3">
          <button
            onClick={() => {
              history.goBack();
            }}
            className="bg-gray-300 py-2 px-4 rounded text-gray-700 mr-10"
          >
            Back
          </button>
          <div>
            <button
              onClick={handleContactDelete}
              className="bg-red-500 py-2 px-4 rounded text-white mr-3"
            >
              Delete
            </button>
            <button
              onClick={handleContactEdit}
              className="bg-blue-500 py-2 px-4 rounded text-white"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetailsScreen;
