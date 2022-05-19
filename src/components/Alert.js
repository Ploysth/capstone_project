import { useEffect } from "react";

const Alert = ({ msg, removeAlert, testCheckInList }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [testCheckInList]);
  return <p>{msg}</p>;
};

export default Alert;
