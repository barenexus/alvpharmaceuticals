import React, { useEffect, useState } from "react";
import "./Syrups.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { getSyrups } from "../../services/dataServices";

const Syrups = () => {
  const [syrups, setSyrups] = useState([]);

  useEffect(() => {
    getSyrups()
      .then((data) => setSyrups(data))
      .catch((err) => console.error(err));

    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="container">
      <div className="container__heading" data-aos="fade-up">
        Syrups
      </div>

      <div className="container__items">
        {syrups.map((syrup, id) => (
          <div
            className="container__items__item"
            key={id}
            data-aos="zoom-in"
          >
            <div className="container__items__item__image">
              <img src={syrup.image} alt={syrup.title} />
            </div>

            <div className="container__items__item__title">
              {syrup.title}
            </div>

            <div className="container__items__item__description">
              {syrup.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Syrups;