import NewsList from "@/components/newsList";
import { getLatestNews } from "@/lib/news";

export default function latestNewsPage () {

    const news = getLatestNews();

    return <div>
        <h2>Latest News</h2>
        <NewsList news={news} />
    </div>
}