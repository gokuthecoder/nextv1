import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer id="site-footer" className={styles.siteFooter}>
            <div className={`${styles.footerWrapper} dark-background`}>
                <div className="site__container fullwidth-vidorev-ctrl">
                    <div className={`${styles.fontSize17} ${styles.textCenter}`}>
                        <p className={styles.defaultCopyright}>
                            <span>© 2024. Created with </span>
                            <Image 
                                src="https://s.w.org/images/core/emoji/14.0.0/svg/2764.svg" 
                                alt="heart" 
                                width={16} 
                                height={16} 
                            /> By AllMovieshub Team{' '}
                            <Image 
                                src="https://s.w.org/images/core/emoji/14.0.0/svg/2764.svg" 
                                alt="heart" 
                                width={16} 
                                height={16} 
                            />
                        </p>
                        <hr />
                        <div className={styles.footerLinks}>
                            <Link href="/movie-request-page.html">Request Us</Link> |
                            <Link href="/dmca.html">DMCA</Link> |
                            <Link href="/sitemap.xml" target="_blank" rel="noopener noreferrer">Sitemap</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
