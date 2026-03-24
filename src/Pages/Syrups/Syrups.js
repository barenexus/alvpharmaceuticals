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

    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="syrup">
      <div className="syrup__heading" data-aos="fade-up">
        Our Syrup Range
      </div>

      <div className="syrup__items">
        {syrups.map((syrup) => (
          <div className="syrup__card" key={syrup.id} data-aos="zoom-in">
            <div className="syrup__image">
              <img src={`/icons/${syrup.image}`} alt={syrup.title} />
            </div>

            <div className="syrup__content">
              <h3>{syrup.title}</h3>
              <h4>{syrup.subTitle}</h4>

              <ul>
                {syrup.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Syrups;
