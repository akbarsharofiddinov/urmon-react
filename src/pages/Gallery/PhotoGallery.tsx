import { setPhotoGallery } from "@/store/gallerySlice/gallerySlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaExpand } from "react-icons/fa6";

const PhotoGallery: React.FC = () => {
  const [photos, setPhotos] = useState<{ photo: string }[]>([]);
  const { photoGallery } = useAppSelector((state) => state.gallery);
  const dispatch = useAppDispatch();

  async function getAllPhotos() {
    try {
      const response = await axios.get("https://admin.aralboyi.uz/api/photos");
      if (response.status === 200) {
        dispatch(setPhotoGallery(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!photoGallery.length) {
      getAllPhotos();
    } else {
      photoGallery.map((gallery) => {
        gallery.photos.map((photo) => setPhotos((prev) => [...prev, photo]));
      });
    }
  }, [photoGallery.length]);

  return (
    <>
      <section className="photoGallery">
        <div className="container">
          {photos.length ? (
            <div className="images">
              {photos.map((photo, index) => (
                <div className="img-box" key={index}>
                  <img
                    src={`https://admin.aralboyi.uz/storage/${photo.photo}`}
                    alt="media"
                  />
                  <span>
                    <FaExpand />
                  </span>
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

export default PhotoGallery;
