import React, { useEffect, useState } from "react";
import "./Capsules.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { getCapsules } from "../../services/dataServices";

const Capsules = () => {
  const [capsules, setCapsules] = useState([]);

  useEffect(() => {
    getCapsules()
      .then((data) => setCapsules(data))
      .catch((err) => console.error(err));

    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="capsule">
      <div className="capsule__heading" data-aos="fade-up">
        Capsules
      </div>

      <div className="capsule__items">
        {capsules.map((capsule) => (
          <div className="capsule__card" key={capsule.id} data-aos="zoom-in">
            <div className="capsule__image">
              <img src={`/icons/${capsule.image}`} alt={capsule.title} />
            </div>

            <div className="capsule__content">
              <h3>{capsule.title}</h3>
              <h4>{capsule.subTitle}</h4>

              <ul>
                {capsule.description.map((point, index) => (
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

export default Capsules;
