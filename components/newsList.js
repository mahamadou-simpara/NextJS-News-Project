import Link from "next/link";


export default function NewsList ({news}) {
    return <ul className="news-list">
    {news.map(news => {return <li key={news.id}><Link href={`/news/${news.slug}`}>
    <img src={`/images/news/${news.image}`}  alt={news.slug}/>
    <span>{news.title}</span>
    </Link></li>})}
  </ul>
} 