import { Banner, SectionMedia, SectionNews } from "@/components";
import React from "react";

import link1 from "@/images/links/president-uz.png";
import link2 from "@/images/links/link-2.png";
import link3 from "@/images/links/link-3.png";

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <SectionNews />
      <SectionMedia />

      <section className="section-statistic">
        <div className="container">
          <div className="section-inner">
            <h2 className="section-title title">Statistika</h2>

            <div className="statistics">
              <div className="statistic col-1">
                <p>
                  <span>60</span> ta tur
                </p>
                <p>Yetishtiriladigan nihol va ko'chat turlari</p>
              </div>
              <div className="statistic col-2">
                <p>
                  <span>200</span> ming gektar
                </p>
                <p>Yiliga o'rtacha barpo etiladigan o'rmonlar</p>
              </div>
              <div className="statistic col-3">
                <p>
                  <span>5</span> mln gektar
                </p>
                <p>O'rmonli yerlar</p>
              </div>
              <div className="statistic col-4">
                <p>
                  <span>12</span> mln gektar
                </p>
                <p>O'rmon fondi yerlari</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-links">
        <div className="container">
          <div className="section-inner">
            <h2 className="section-title title">Foydali lavhalar</h2>

            <div className="links">
              <a href="https://president.uz/uz" className="link-box">
                <img src={link1} alt="image" />
                <h4 className="link-title">
                  Официальный веб-сайт Президента Республики Узбекистан
                </h4>
                <p className="desc">president.uz</p>
              </a>
              <a href="https://gov.uz" className="link-box">
                <img src={link2} alt="image" />
                <h4 className="link-title">
                  Портал Государственной Власти Республики Узбекистан
                </h4>
                <p className="desc">www.gov.uz</p>
              </a>
              <a href="https://joqargikenges.uz" className="link-box">
                <img src={link3} alt="image" />
                <h4 className="link-title">
                  Жокаргы Кенес Республики Каракалпакстан
                </h4>
                <p className="desc">www.joqargikenes.uz</p>
              </a>
              <a href="https://karakalpakstan.uz" className="link-box">
                <img src={link3} alt="image" />
                <h4 className="link-title">
                  Совет Министров Республики Каракалпакстан
                </h4>
                <p className="desc">www.karakalpakstan.uz</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
