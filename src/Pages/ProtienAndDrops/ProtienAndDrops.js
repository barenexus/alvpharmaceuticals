import React, { useEffect, useState } from "react";
import "./ProtienAndDrops.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { getSyrups } from "../../services/dataServices";

const ProtienAndDrops = () => {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    getSyrups()
      .then((data) => setDrops(data))
      .catch((err) => console.error(err));

    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="container">
      <div className="container__heading" data-aos="fade-up">
        Protien Powder And Drops
      </div>

      <div className="container__items">
        {drops.map((drop, id) => (
          <div
            className="container__items__item"
            key={id}
            data-aos="zoom-in"
          >
            <div className="container__items__item__image">
              <img src={drop.image} alt={drop.title} />
            </div>

            <div className="container__items__item__title">
              {drop.title}
            </div>

            <div className="container__items__item__description">
              {drop.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProtienAndDrops;