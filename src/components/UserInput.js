import React, { useState } from "react";
import { Button, Form, Input, TextArea } from "semantic-ui-react";
import useToast from "../hooks/useToast";
import { toastPositions, toastTypes } from "../utils/toastProperpties";
import UserGuide from "./UserGuide";

function UserInput({ setPosition, setAutoClose, position, autoClose }) {
  let toast = useToast();
  let [message, setMessage] = useState("");
  let [toastType, setType] = useState("");

  function handleClick() {
    toast[toastType || "success"](message || toastType || "Success");
    return setMessage("");
  }

  return (
    <div className="container">
      <div className="user_input_section">
        <h1 className="title">Notify</h1>
        <UserGuide toastType={toastType} message={message} />
        <Form>
          <h2>Type</h2>
          <div>
            {toastTypes.map((type) => {
              return (
                <span className="type_input" key={type.value + type.id}>
                  <nobr>
                    <input
                      type="radio"
                      name="type"
                      id={type.id}
                      value={type.value}
                      checked={
                        (!toastType && type.value === "success") ||
                        toastType === type.value
                      }
                      onChange={(event) => setType(event.target.value)}
                    />
                    <label htmlFor={type.id}>{type.value}</label>
                  </nobr>
                </span>
              );
            })}
          </div>
          <h2>Position</h2>
          <div>
            {toastPositions.map((pos) => {
              return (
                <span className="pos_input" key={position.id}>
                  <input
                    type="radio"
                    name="position"
                    id={pos.value}
                    value={pos.value}
                    checked={
                      (!position && pos.value === "top-right") ||
                      position === pos.value
                    }
                    onChange={(event) => setPosition(event.target.value)}
                  />
                  <label htmlFor={pos.value}>{pos.value}</label>
                </span>
              );
            })}
          </div>
          <div className="message_sec">
            <div>
              <h2>Delay</h2>
              <Input
                fluid
                type="number"
                value={autoClose || 3000}
                placeholder="Delay"
                onChange={(event) => setAutoClose(event.target.value)}
              />
            </div>

            <div>
              <h2>Message</h2>

              <TextArea
                fluid
                value={message || ""}
                placeholder="Type message..."
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
          </div>
          <div className="toast_btn">
            <Button onClick={handleClick} size="large" basic color="blue">
              Show Toast
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default UserInput;
