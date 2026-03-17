import React, { useEffect, useState } from "react";
import "./Capsules.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { getSyrups } from "../../services/dataServices";

const Capsules = () => {
  const [capsules, setCapsules] = useState([]);

  useEffect(() => {
    getSyrups()
      .then((data) => setCapsules(data))
      .catch((err) => console.error(err));

    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="container">
      <div className="container__heading" data-aos="fade-up">
        Capsules
      </div>

      <div className="container__items">
        {capsules.map((capsule, id) => (
          <div
            className="container__items__item"
            key={id}
            data-aos="zoom-in"
          >
            <div className="container__items__item__image">
              <img src={capsule.image} alt={capsule.title} />
            </div>

            <div className="container__items__item__title">
              {capsule.title}
            </div>

            <div className="container__items__item__description">
              {capsule.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Capsules;