import Link from 'next/link';
import styles from './Pagination.module.css';

export default function Pagination({ currentPage = 2, totalPages = 93 }) {
    return (
        <nav className={styles.pagination} aria-label="Blog pagination">
            <span className={styles.pageInfo}>Page {currentPage} of {totalPages}</span>
            
            {currentPage > 1 && (
                <Link href="/" className={styles.pageLink} rel="prev" aria-label="Previous Page">
                    «
                </Link>
            )}

            <Link href="/" className={styles.pageLink} aria-label="Page 1">1</Link>
            {currentPage > 2 && <span className={styles.pageDots}>...</span>}
            
            <Link href={`/page/${currentPage - 1}`} className={styles.pageLink} aria-label={`Page ${currentPage - 1}`}>
                {currentPage - 1}
            </Link>
            <span aria-current="page" className={styles.currentPage}>{currentPage}</span>
            <Link href={`/page/${currentPage + 1}`} className={styles.pageLink} aria-label={`Page ${currentPage + 1}`}>
                {currentPage + 1}
            </Link>

            <span className={styles.pageDots}>...</span>

            <Link href={`/page/10`} className={styles.pageLink} aria-label="Page 10">10</Link>
            <Link href={`/page/20`} className={styles.pageLink} aria-label="Page 20">20</Link>
            <Link href={`/page/30`} className={styles.pageLink} aria-label="Page 30">30</Link>
            <span className={styles.pageDots}>...</span>

            {currentPage < totalPages && (
                <Link href={`/page/${currentPage + 1}`} className={styles.pageLink} rel="next" aria-label="Next Page">
                    »
                </Link>
            )}
            <Link href={`/page/${totalPages}`} className={styles.pageLink} aria-label="Last Page">
                Last »
            </Link>
        </nav>
    );
}
