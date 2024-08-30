import NewsList from "@/components/newsList";
import { getNewsForYear } from "@/lib/news";

export default function NewsYearPage ({params}) {

    const year = params.year

    const news = getNewsForYear(year)

    return <div>
        <h2>Latest News</h2>
        <NewsList news={news} />
    </div>
}

import { getAvailableNewsYears } from "@/lib/news"
import Link from "next/link";

export default function ArchiveNewsPage () {

    const links = getAvailableNewsYears();

    return <header id="archive-header">       
    <nav>
        <ul>
            {links.map(link => <li key={link}><Link href={`/archive/${link}`}>{link}</Link></li>)}
        </ul>
    </nav>
    </header>
}