'use client';
import { DUMMY_NEWS } from '@/dummy-news';
import { useRouter } from 'next/navigation';


export default function ItemImage({ params }) {
  const router = useRouter()
  const pathName = params.slug;

  const news = DUMMY_NEWS.find((news) => news.slug === pathName);

  if (!news) {
    notFound();
  }

  return (<>
<div className='modal-backdrop' onClick={router.back}/>
    <dialog className='modal' open>
    <div className="fullscreen-image">
      <img src={`/images/news/${news.image}`} alt={news.title} />
    </div>
    </dialog>
    </>
  );
}
