import React, { useEffect, useState } from "react";
import "./Tablets.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { getSyrups } from "../../services/dataServices";

const Tablets = () => {
  const [tablets, setTablets] = useState([]);

  useEffect(() => {
    getSyrups()
      .then((data) => setTablets(data))
      .catch((err) => console.error(err));

    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="container">
      <div className="container__heading" data-aos="fade-up">
        Tablets
      </div>

      <div className="container__items">
        {tablets.map((tablet, id) => (
          <div
            className="container__items__item"
            key={id}
            data-aos="zoom-in"
          >
            <div className="container__items__item__image">
              <img src={tablet.image} alt={tablet.title} />
            </div>

            <div className="container__items__item__title">
              {tablet.title}
            </div>

            <div className="container__items__item__description">
              {tablet.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tablets;