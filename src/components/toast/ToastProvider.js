import React, { useReducer } from "react";
import reducer from "../../reducer/toastReducer";
import ToastContext from "../../context/toastContext";
import ToastContainer from "./ToastContainer";

function ToastProvider(props) {
  let [state, dispatch] = useReducer(reducer);
  let { position, autoClose } = props;

 
  return (
    <ToastContext.Provider value={{ state, dispatch }}>
      {props.children}
      <ToastContainer
        position={position || "top-right"}
        autoClose={autoClose || "3000"}
      />
    </ToastContext.Provider>
  );
}

export default ToastProvider;
