import React, { useEffect, useState } from "react";
import "./Tablets.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { getTablets } from "../../services/dataServices";

const Tablets = () => {
  const [tablets, setTablets] = useState([]);

  useEffect(() => {
    getTablets()
      .then((data) => setTablets(data))
      .catch((err) => console.error(err));

    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="tablet">
      <div className="tablet__heading" data-aos="fade-up">
        Tablets
      </div>

      <div className="tablet__items">
        {tablets.map((tablet) => (
          <div className="tablet__card" key={tablet.id} data-aos="zoom-in">
            <div className="tablet__image">
              <img src={`/icons/${tablet.image}`} alt={tablet.title} />
            </div>

            <div className="tablet__content">
              <h3>{tablet.title}</h3>
              <h4>{tablet.subTitle}</h4>

              <ul>
                {tablet.description.map((point, index) => (
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

export default Tablets;
