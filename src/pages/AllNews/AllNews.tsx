import { setAllNews } from "@/store/allNewsSlice/allNewsSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import axios from "axios";
import React, { useEffect } from "react";
import { CiCalendar } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";

const AllNews: React.FC = () => {
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
    if (!allNews.length) {
      getAllNews();
    }
  }, [allNews.length]);

  return (
    <>
      <section className="all-news-page">
        <div className="container">
          <div className="news">
            <h2 className="news_title title">Yangiliklar</h2>
            <div className="newsCards">
              {allNews.length
                ? allNews.map((news, index) => (
                    <div className="newsCard" key={index}>
                      <img
                        src={`https://admin.aralboyi.uz/${news.photo}`}
                        alt="news image"
                      />
                      <div className="info-body">
                        <div className="date">
                          <CiCalendar />
                          <span>28/06/24, 10:04</span>
                          <FaRegEye />
                          <span>{news.views}</span>
                        </div>
                        <a href="#" className="newsCard_title">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: news.description_uz,
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllNews;
