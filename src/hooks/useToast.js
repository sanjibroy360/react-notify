import React from "react";
import { useContext } from "react";
import ToastContext from "../context/toastContext";
import {  ADD_TOAST_DIRECTIONWISE } from "../types";
import SuccessIcon from "../components/icons/SuccessIcon";
import ErrorIcon from "../components/icons/ErrorIcon";
import WarningIcon from "../components/icons/WarningIcon";
import InfoIcon from "../components/icons/InfoIcon";
import toastInfoGenerator from "../utils";

function useToast() {
  const context = useContext(ToastContext);
  let position = context.state?.position;
  let autoClose=context.state?.autoClose;

  const success = (message) => {
    let toastInfo = toastInfoGenerator("success",SuccessIcon, message, position, autoClose); 
    context.dispatch({ type: ADD_TOAST_DIRECTIONWISE, payload: toastInfo });
  };

  const error = (message) => {
    let toastInfo = toastInfoGenerator("error",ErrorIcon, message,position, autoClose ); 
    context.dispatch({ type: ADD_TOAST_DIRECTIONWISE, payload: toastInfo });
  };

  const warn = (message) => {
    let toastInfo = toastInfoGenerator("warn",WarningIcon, message,position, autoClose ); 
    context.dispatch({ type: ADD_TOAST_DIRECTIONWISE, payload: toastInfo });
  };

  const info = (message) => {
    let toastInfo = toastInfoGenerator("info",InfoIcon, message,position, autoClose );
    context.dispatch({ type: ADD_TOAST_DIRECTIONWISE, payload: toastInfo });
  };

  const toast = {
    success,
    error,
    warn,
    info,
  };

  return toast;
}

export default useToast;
