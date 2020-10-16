import React, { useState } from "react";
import ToastProvider from "../components/toast/ToastProvider";
import "../assets/stylesheets/index.scss";
import 'semantic-ui-css/semantic.min.css';
import UserInput from "./UserInput";

export default {
  title: "Toast",
  component: ToastProvider,
};

export function Demo() {
  let [position, setPosition] = useState("");
  let [autoClose, setAutoClose] = useState(0);
  return (
    <ToastProvider autoClose={autoClose} position={position}>
      <UserInput
        setPosition={setPosition}
        setAutoClose={setAutoClose}
        position={position}
        autoClose={autoClose}
      />
    </ToastProvider>
  );
}
