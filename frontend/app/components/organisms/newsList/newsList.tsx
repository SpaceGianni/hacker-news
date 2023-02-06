"use client";

import React from "react";
import { useState, useEffect } from "react";
import { NewsInterface } from "../../../news.interface";
import News from "../../molecules/newsText/news";
import { getNews, deleteNews } from "../../../utils/news.services";
import styles from "./newsList.module.css";
import Spinner from "../../atoms/spinner/spinner";

export default function NewsList() {
  const [news, setNews] = useState<NewsInterface[]>([]);

  const removeNews = (news: NewsInterface[], id: string) => {
    deleteNews(id);
    setNews(
      news.filter((selectedNews: any) => {
        return selectedNews.id !== id;
      })
    );
  };

  useEffect(() => {
    getNews().then((news) => setNews(news));
  }, []);

  if (!news.length) {
    return <h1>News are loading...</h1>;
  }

  return (
    <>
      <div className={styles.newsList}>
        {news.map((oneNew) => (
          <News id={oneNew._id} key={oneNew._id}>
            <h2 className={styles.newsTitle}>
              <a href={oneNew.url} target="_blank">
                {oneNew.title}
              </a>
            </h2>
            <p className={styles.newsAuthor}>-{oneNew.author}</p>
            <p className={styles.newsTitle}>{oneNew.date}</p>
            <span
              className="material-symbols-outlined"
              onClick={() => removeNews(news, oneNew._id)}
            ></span>
          </News>
        ))}
      </div>
    </>
  );
}
