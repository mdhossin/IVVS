import React from "react";

export default function Tooltip({ children, text, ...rest }) {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <div
        className="tooltip h-[83px] w-[83px]"
        style={show ? { visibility: "visible" } : {}}
      >
        {text}
      </div>
      <div
        {...rest}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </div>
  );
}
