import React from "react";

const Button = ({
  onClick,
  className,
  type = "button",
  bgColor = "primary",
  full = false,
  children,
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      onClick={onClick}
      className={`${
        full ? "w-full" : ""
      } px-6 py-3 mt-auto capitalize rounded-lg bg-primary ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
