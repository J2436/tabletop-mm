import React from "react";
import { Alert } from "react-bootstrap";

const Notification = ({ message }) => {
  if (message === "") {
    return null;
  } else {
    return (
      <div>
        <Alert className="text-center" variant="danger" fade="true">
          {message}
        </Alert>
      </div>
    );
  }
};

export default Notification;
