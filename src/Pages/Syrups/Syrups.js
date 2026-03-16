import React, { useEffect } from "react";
import "./Syrups.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Syrups = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <h1>Hello Syrups!!!</h1>
  );
};

export default Syrups;
