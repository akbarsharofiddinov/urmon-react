import axios from "axios";
import React, { useEffect, useState } from "react";

const Tv: React.FC = () => {
  const [tvShows, setTvShows] = useState<ITvShow[]>([]);

  async function getTvShows() {
    try {
      const response = await axios.get(
        "https://admin.aralboyi.uz/api/tvshows/"
      );
      if (response.status === 200) {
        setTvShows(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTvShows();
  }, []);

  return (
    <>
      <section className="section-videoGallery">
        <div className="container">
          
          <div className="videos">
            {tvShows.map((tv, index) => (
              <div className="video-box" key={index}>
                <iframe
                  width="560"
                  height="315"
                  src={tv.tv_src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>

        <div className="modal">
          <div className="modal-inner">
            <button className="close-modal">&times;</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tv;
