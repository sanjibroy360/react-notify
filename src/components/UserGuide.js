import React, { useContext } from "react";
import ToastContext from "../context/toastContext";

function UserGuide({ toastType, message }) {
  let context = useContext(ToastContext);
  return (
    <div className="code_demo">
      <div className="provider_code">
        <nobr>
          <p>
            &lt;<span className="tagname">ToastProvider</span>{" "}
          </p>
          <p>
            &emsp;&nbsp;<span className="prop_name">position</span> = "
            {context.state?.position}"
          </p>
          <p>
            &emsp;&nbsp;<span className="prop_name">autoClose</span> =&nbsp;
            {context.state?.autoClose}
            &nbsp;
            <p>&gt;</p>
          </p>
        </nobr>
        <p>&emsp;&emsp;Your Components</p>
        <nobr>
          <p>
            &lt;/ <span className="tagname">ToastProvider</span> &gt;
          </p>
        </nobr>
      </div>
      <div className="toast_code">
        <p>
          <span className="code">toast.{toastType || "success"}</span>(
          {message || "Any message"})
        </p>
      </div>
    </div>
  );
}

export default UserGuide;
