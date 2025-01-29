import { setPhotoGallery } from "@/store/gallerySlice/gallerySlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaExpand } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SectionMedia: React.FC = () => {
  const [photos, setPhotos] = useState<{ photo: string }[]>([]);
  const { photoGallery } = useAppSelector((state) => state.gallery);
  const dispatch = useAppDispatch();

  async function getAllPhotos() {
    try {
      const response = await axios.get("https://admin.aralboyi.uz/api/photos");
      if (response.status === 200) {
        dispatch(setPhotoGallery(response.data));
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllPhotos();
  }, []);

  useEffect(() => {
    photoGallery.map((gallery) => {
      gallery.photos.map((photo) => setPhotos((prev) => [...prev, photo]));
    });
  }, [photoGallery.length]);

  return (
    <>
      <section className="section-media">
        <div className="container">
          <div className="section-inner">
            <h2 className="section_title title">Media</h2>
            {photos.length ? (
              <div className="medias">
                <div className="img-box">
                  <img
                    src={`https://admin.aralboyi.uz/storage/${photos[0].photo}`}
                    alt="media"
                  />
                  <span>
                    <FaExpand />
                  </span>
                </div>
                <div className="img-box">
                  <img
                    src={`https://admin.aralboyi.uz/storage/${photos[1].photo}`}
                    alt="media"
                  />
                  <span>
                    <FaExpand />
                  </span>
                </div>
                <div className="img-box">
                  <img
                    src={`https://admin.aralboyi.uz/storage/${photos[2].photo}`}
                    alt="media"
                  />
                  <span>
                    <FaExpand />
                  </span>
                </div>
                <div className="img-box">
                  <img
                    src={`https://admin.aralboyi.uz/storage/${photos[3].photo}`}
                    alt="media"
                  />
                  <span>
                    <FaExpand />
                  </span>
                </div>
                <div className="img-box">
                  <img
                    src={`https://admin.aralboyi.uz/storage/${photos[4].photo}`}
                    alt="media"
                  />
                  <span>
                    <FaExpand />
                  </span>
                </div>
                <div className="img-box">
                  <img
                    src={`https://admin.aralboyi.uz/storage/${photos[5].photo}`}
                    alt="media"
                  />
                  <span>
                    <FaExpand />
                  </span>
                </div>
                <Link className="button_link img-box" to="/photo-gallery">
                  Barchasi
                  <span>
                    <FaArrowRight />
                  </span>
                </Link>
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
        </div>
      </section>
    </>
  );
};

export default SectionMedia;
