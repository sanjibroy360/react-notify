import React, { useEffect, useContext, createPortal } from "react";
import ToastContext from "../../context/toastContext";
import Toast from "../toast/Toast";
import { STORE_PROPS } from "../../types";

function ToastContainer(props) {
  let context = useContext(ToastContext);
  let {dispatch} = context;

  useEffect(() => {
    dispatch({
      type: STORE_PROPS,
      payload: {
        position: props?.position,
        autoClose: props?.autoClose,
      }
    });
  }, [props?.position, props?.autoClose, dispatch]);

  return (
    <div>
      {context?.state?.["top-right"].map((toast, index) => {
        return (
          <div key={toast.id + index}>
            <Toast toast={toast} index={index} />
          </div>
        );
      })}

      {context?.state?.["top-left"].map((toast, index) => {
        return (
          <div key={toast.id + index}>
            <Toast toast={toast} index={index} />
          </div>
        );
      })}
      {context?.state?.["top-center"].map((toast, index) => {
        return (
          <div key={toast.id + index}>
            <Toast toast={toast} index={index} />
          </div>
        );
      })}
      {context?.state?.["bottom-left"].map((toast, index) => {
        return (
          <div key={toast.id + index}>
            <Toast toast={toast} index={index} />
          </div>
        );
      })}
      {context?.state?.["bottom-right"].map((toast, index) => {
        return (
          <div key={toast.id + index}>
            <Toast toast={toast} index={index} />
          </div>
        );
      })}
      {context?.state?.["bottom-center"].map((toast, index) => {
        return (
          <div key={toast.id + index}>
            <Toast toast={toast} index={index} />
          </div>
        );
      })}
    </div>
  );
}

export default ToastContainer;
