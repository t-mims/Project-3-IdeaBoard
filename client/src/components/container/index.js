import React from "react"

function Container(props) {
    //will need to double check props selector
    return <div className="container" style={props.style}>{props.children}</div>;
  }
  export default Container;
  