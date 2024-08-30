import NewsList from '@/components/newsList';
import {
  getNewsForYear,
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYearAndMonth
} from '@/lib/news';
import Link from 'next/link';

export default function NewsYearPage({ params }) {
  let links = getAvailableNewsYears();
  const year = params.filter?.[0];
  const month = params.filter?.[1];

  console.log(params.filter);

  const news = getNewsForYear(year);

  let contentToOutput = <p>No specific date picked yet</p>;

  if (year && !month) {
    links = getAvailableNewsMonths(year);
    contentToOutput = <NewsList news={news} />;
  }

  if (year && month) {
    const newsFilterByMonth = getNewsForYearAndMonth(year, month);
    contentToOutput = <NewsList news={newsFilterByMonth} />;
    links = [];
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              let href = year ? `/archive/${year}/${link}` : `/archive/${link}`
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {contentToOutput}
    </>
  );
}
