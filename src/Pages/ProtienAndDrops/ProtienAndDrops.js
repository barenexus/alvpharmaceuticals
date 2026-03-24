import React, { useEffect, useState } from "react";
import "./ProtienAndDrops.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { getProtien } from "../../services/dataServices";

const ProtienAndDrops = () => {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    getProtien()
      .then((data) => setDrops(data))
      .catch((err) => console.error(err));

    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="protein">
      <div className="protein__heading" data-aos="fade-up">
        Protein Powder & Drops
      </div>

      <div className="protein__items">
        {drops.map((drop) => (
          <div className="protein__card" key={drop.id} data-aos="zoom-in">
            <div className="protein__image">
              <img src={`/icons/${drop.image}`} alt={drop.title} />
            </div>

            <div className="protein__content">
              <h3>{drop.title}</h3>
              <h4>{drop.subTitle}</h4>

              <ul>
                {drop.description.map((point, index) => (
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

export default ProtienAndDrops;
