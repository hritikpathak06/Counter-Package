import * as React from "react";

type PropsType = {
  children: React.ReactNode;
};

const Button = ({ children }: PropsType) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        fontSize: "24px",
        borderRadius: "10px",
        cursor: "pointer",
        backgroundColor: "black",
        color: "white",
        border: "none",
      }}
    >
      {children}
    </button>
  );
};

export { Button };
