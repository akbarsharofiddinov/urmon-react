import { setAllNews } from "@/store/allNewsSlice/allNewsSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import axios from "axios";
import React, { useEffect } from "react";
import { CiCalendar } from "react-icons/ci";
import { FaArrowRight, FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SectionNews: React.FC = () => {
  const { allNews } = useAppSelector((state) => state.allNews);
  const dispatch = useAppDispatch();

  async function getAllNews() {
    try {
      const response = await axios.get("https://admin.aralboyi.uz/api/posts");
      if (response.status === 200) {
        dispatch(setAllNews(response.data.data));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllNews();
  }, []);

  return (
    <>
      <section className="section-news">
        <div className="container">
          {allNews.length ? (
            <div className="news">
              <h2 className="news_title title">Yangiliklar</h2>
              <div className="newsCards">
                <div className="newsCard">
                  <img
                    src={`https://admin.aralboyi.uz/${allNews[0].photo}`}
                    alt="news image"
                  />
                  <div className="info-body">
                    <div className="date">
                      <div>
                        <CiCalendar />
                        <span>24/06/24, 18:28</span>
                      </div>
                      <div>
                        <FaRegEye />
                        <span>{allNews[0].views}</span>
                      </div>
                    </div>
                    <a href="./src/pages/news.html" className="newsCard_title">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: allNews[0].description_uz,
                        }}
                      />
                    </a>
                  </div>
                </div>
                <div className="newsCard">
                  <img
                    src={`https://admin.aralboyi.uz/${allNews[1].photo}`}
                    alt="news image"
                  />
                  <div className="info-body">
                    <div className="date">
                      <div>
                        <CiCalendar />
                        <span>20/06/24, 11:56</span>
                      </div>
                      <div>
                        <FaRegEye />
                        <span>193</span>
                      </div>
                    </div>
                    <a href="./src/pages/news.html" className="newsCard_title">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: allNews[1].description_uz,
                        }}
                      />
                    </a>
                  </div>
                </div>
                <div className="newsCard">
                  <img
                    src={`https://admin.aralboyi.uz/${allNews[2].photo}`}
                    alt="news image"
                  />
                  <div className="info-body">
                    <div className="date">
                      <div>
                        <CiCalendar />
                        <span>28/06/24, 10:04</span>
                      </div>
                      <div>
                        <FaRegEye />
                        <span>38</span>
                      </div>
                    </div>
                    <a href="./src/pages/news.html" className="newsCard_title">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: allNews[2].description_uz,
                        }}
                      />
                    </a>
                  </div>
                </div>
                <div className="newsCard">
                  <img
                    src={`https://admin.aralboyi.uz/${allNews[3].photo}`}
                    alt="news image"
                  />
                  <div className="info-body">
                    <div className="date">
                      <div>
                        <CiCalendar />
                        <span>13/06/24, 20:54</span>
                      </div>
                      <div>
                        <FaRegEye />
                        <span>207</span>
                      </div>
                    </div>
                    <a href="./src/pages/news.html" className="newsCard_title">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: allNews[3].description_uz,
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>

              <Link to={"/all-news"} className="news_link">
                Barcha yangiliklar <FaArrowRight />
              </Link>
            </div>
          ) : (
            <h1>No News</h1>
          )}
        </div>
      </section>
    </>
  );
};

export default SectionNews;
