'use client';
import NewsList from "@/components/newsList";
import { useEffect, useState } from "react";

export default function News() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState();

    useEffect(() => {
      async function fetchNewsData () {
        setIsLoading(true);
        const response = await fetch('http://localhost:8080/news');

        if(!response.ok){
          setError('Failed to fetch news data !')
        }

        const news = await response.json();
        setIsLoading(false);
        setNews(news);
      }

      fetchNewsData();
    }, []);

    if(error){
      return <p>{error}</p>
    };

    if(isLoading) {
      return <p>Loading ...</p>
    }

    let contentElement;

    if(news){
      contentElement = <NewsList news={news} />
    }
  
    return (
      <div>
        <h1>News Page</h1>
        {contentElement}
      </div>
    );
  }
  