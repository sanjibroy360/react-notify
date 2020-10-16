import React, { useState } from "react";
import ToastProvider from "./toast/ToastProvider";
import UserInput from "./UserInput";

function App() {
  let [position, setPosition] = useState("");
  let [autoClose, setAutoClose] = useState(0);
  return (
    <ToastProvider position={position} autoClose={autoClose}>
      <UserInput
        setPosition={setPosition}
        setAutoClose={setAutoClose}
        position={position}
        autoClose={autoClose}
      />
    </ToastProvider>
  );
}

export default App;
