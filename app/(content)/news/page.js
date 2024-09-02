import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/newsList";

export default function News() {

  
    return (
      <div>
        <h1>News Page</h1>
        <NewsList news={DUMMY_NEWS} />
      </div>
    );
  }
  