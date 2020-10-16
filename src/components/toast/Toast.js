import React, { useEffect, useContext } from "react";
import ToastContext from "../../context/toastContext";
import { REMOVE_TOAST_DIRECTIONWISE } from "../../types";
import CrossIcon from "../icons/CrossIcon";

function Toast({ toast, index }) {
  const context = useContext(ToastContext);

  const [varticalPos, horizontalPos] = toast.position.split("-");

  useEffect(() => {
    let timerId = setInterval(() => {
      context.dispatch({
        type: REMOVE_TOAST_DIRECTIONWISE,
        payload: toast,
      });
    }, +toast.autoClose || 3000);

    return () => {
      clearInterval(timerId);
    };
  }, [toast]);

  function handleRemoveToast(toast) {
    return context.dispatch({
      type: REMOVE_TOAST_DIRECTIONWISE,
      payload: toast,
    });
  }

  return (
    <div
      key={toast.id}
      className={`toast move_in_bottom ${toast.type} ${toast.position} ${horizontalPos}`}
      style={{
        [varticalPos]: `${index * 4 + 0.25}rem`,
      }}
    >
      <div className="toast_content">
        <div className={`${toast.iconName}`}>
          <toast.iconName />
        </div>
        <p>{toast.content}</p>
      </div>
      <div className="close_btn">
        <button onClick={() => handleRemoveToast(toast)}>
          <CrossIcon />
        </button>
      </div>
    </div>
  );
}

export default Toast;
