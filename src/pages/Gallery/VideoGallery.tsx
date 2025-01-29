import { setVideoGallery } from "@/store/gallerySlice/gallerySlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import axios from "axios";
import React, { useEffect } from "react";

const VideoGallery: React.FC = () => {
  const { videoGallery } = useAppSelector((state) => state.gallery);
  const dispatch = useAppDispatch();

  async function getAllVideos() {
    try {
      const response = await axios.get("https://admin.aralboyi.uz/api/videos");
      if (response.status === 200) {
        dispatch(setVideoGallery(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllVideos();
  }, []);

  return (
    <>
      <section className="section-videoGallery">
        <div className="container">
          {videoGallery.length ? (
            <div className="videos">
              {videoGallery.map((video, index) => (
                <div className="video-box" key={index}>
                  <iframe
                    width="560"
                    height="315"
                    src={video.video_src}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
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

export default VideoGallery;
