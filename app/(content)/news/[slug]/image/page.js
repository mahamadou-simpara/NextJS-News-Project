import { DUMMY_NEWS } from '@/dummy-news';

export default function ItemImage({ params }) {
  const pathName = params.slug;

  const news = DUMMY_NEWS.find((news) => news.slug === pathName);

  if (!news) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${news.image}`} alt={news.title} />
    </div>
  );
}
