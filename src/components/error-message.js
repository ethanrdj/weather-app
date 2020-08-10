import React from "react";

const ErrorMessage = (props) => {
  if (props.message === "Server error") {
    return (
      <>
        <h1>Server error, please bare with us!</h1>{" "}
      </>
    );
    // eslint-disable-next-line
  } else if (props.message === props.message) {
    return (
      <>
        <h1>{props.message} cannot be found!</h1>
      </>
    );
  }
};

export default ErrorMessage;
