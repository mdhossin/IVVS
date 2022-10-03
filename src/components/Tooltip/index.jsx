import React from "react";

export default function Tooltip({ children, text, ...rest }) {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <div
        className="invisible relative top-[-30px] right-[-10px] z-10 h-[35px]  rounded bg-[#ffffff] px-[15px] py-[5px] text-[#000]"
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
