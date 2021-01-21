import React from "react";

export function BoardButton(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 12, marginTop:10}} className="btn btn-success">
      {props.children}
    </button>
  );
}
