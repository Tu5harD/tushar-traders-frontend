// Loader.js

import React, { useState, useEffect } from "react";
import "./Loader.css";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the loader after 10 seconds
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 10000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`loader ${
        showLoader ? "visible" : "hidden"
      }`}
    ></div>
  );
};

export default Loader;
