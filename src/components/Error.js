import React, { useEffect } from "react";
import { useToDoContextProvider } from "../context/todo-context";

const Error = ({ error }) => {
  const { resetError } = useToDoContextProvider();
  useEffect(() => {
    let a = setTimeout(() => {
      resetError();
    }, 2000);

    return () => {
      clearTimeout(a);
    };
  }, [resetError]);

  return <div className="flash-container">{error}</div>;
};

export default Error;
