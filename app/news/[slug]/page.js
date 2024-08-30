import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function NewsDetail ({params}) {
    const pathName = params.slug;

    const news = DUMMY_NEWS.find(news => news.slug === pathName);    

    if(!news){
        notFound();
    }

    return <article className="news-article">
        <header>
            <img src={`/images/news/${news.image}`} />
            <h1>{news.title}</h1>
            <time dateTime={news.date}>{news.date}</time>
        </header>
        <p>{news.content}</p>
    </article>
}