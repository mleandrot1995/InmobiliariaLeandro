
import React from "react";

export default function FormWrapper({ title, children }) {
  return (
    <div className="page">
      {title && <h1>{title}</h1>}
      <form>{children}</form>
    </div>
  );
}
