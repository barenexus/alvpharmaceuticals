import React, { useEffect } from "react";
import "./Capsules.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Capsules = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <h1>Hello Capsules!!!</h1>
  );
};

export default Capsules;
