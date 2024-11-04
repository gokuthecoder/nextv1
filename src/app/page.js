"use client";

import Image from "next/image";
import Link from "next/link";
// import BlogPost from "../../component/blog";
// import MoviePage from "./movie/page";
import Pagination from "../../component/pagination";
import Footer from "../../component/footer";

import dynamic from 'next/dynamic';
import Head from "next/head";

const BlogPost = dynamic(() => import('../../component/blog'), { ssr: false });
const MoviePage = dynamic(() => import('./movie/page'), { ssr: false });


export default function Home() {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/dsfsdfad_pdfds.png" />
        <link rel="preload" as="image" href="https://image.tmdb.org/t/p/w185/k42Owka8v91trK1qMYwCQCNwJKr.jpg" />
        <link rel="preload" as="image" href="https://allmovieshub.gay/wp-content/uploads/2024/10/kWNCRgt3ocv19bYO0sk7ui5i89iy5iy9i89889yiy.webp" />
        <link rel="preload" as="image" href="https://moviesrock.pro/wp-content/uploads/2024/10/kWNCRgt3ocv19bYO0sk7ui5i89iy5iy9i89889yiy.webp" />
        <link rel="preload" as="image" href="https://allmovieshub.gay/wp-content/uploads/2024/09/imadfdge.png" />
        <link rel="preload" as="image" href="https://allmovieshub.gay/wp-content/uploads/2024/09/imadfdge.png" />
      </Head>
      <div id="site-wrap-parent" className="site-wrap-parent site-wrap-parent-control">
        <div id="site-wrap-children" className="site-wrap-children site-wrap-children-control">
          <header id="site-header" className="site-header header-default site-header-control">
            <div className="top-nav top-nav-control dark-background">
              <div className="site__container fullwidth-vidorev-ctrl container-control">
                <div className="site__row auto-width">
                  <div className="site__col float-left top-videos">
                    <div className="top-video-content">
                      <div className="top-video-wrap">
                      </div>
                    </div>
                  </div>
                  <div className="site__col float-right top-social">
                    <div className="top-social-content">
                      <ul className="social-block s-grid nav-style">
                        <li className="watch-later-elm">
                          <Link href="#" title="Notifications" className="top-watch-dropdown">
                            <span className="icon">
                              <i className="fa fa-bell" aria-hidden="true" />
                            </span>
                          </Link>
                          <ul className="top-watch-later-listing dark-background">
                            <li className="top-watch-later-items no-video" />
                            <li className="watch-no-video">
                              <div>
                                <i className="fa fa-file-video-o" aria-hidden="true" /><br />
                                Don't miss new videos<br />
                                Sign in to see updates from your favourite channels<br /><br />
                                <br />
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-content">
              <div className="site__container fullwidth-vidorev-ctrl container-control">
                <div className="site__row auto-width">
                  <div className="site__col float-left nav-logo">
                    <div className="nav-logo-img">
                      <Link href="https://allmovieshub.gay/" title="AllMoviesHub" className="logo-link">
                        <Image src="/dsfsdfad_pdfds.png" alt="AllMoviesHub" className="main-logo" width={200} height={200} style={{'width':"auto", 'height':"auto"}} priority />
                        <Image src="/dsfsdfad_pdfds.png" alt="AllMoviesHub" className="main-logo-mobile" width={200} height={200} style={{'width':"auto", 'height':"auto"}} priority />
                        <Image src="/dsfsdfad_pdfds.png" alt="AllMoviesHub" className="sticky-logo" width={200} height={200} style={{'width':"auto", 'height':"auto"}} priority />
                      </Link>
                    </div>
                  </div>
                  <div className="site__col float-right top-ad">
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-wrap nav-wrap-control">
              <div className="main-nav main-nav-control">
                <div className="site__container fullwidth-vidorev-ctrl container-control">
                  <div className="site__row auto-width">
                    <div className="site__col float-left nav-logo">
                      <div className="nav-logo-img">
                        <Link href="https://allmovieshub.gay/" title="AllMoviesHub" className="logo-link">
                          <Image src="/dsfsdfad_pdfds.png" alt="AllMoviesHub" className="main-logo" width={200} height={200} style={{'width':"auto", 'height':"auto"}} priority />
                          <Image src="/dsfsdfad_pdfds.png" alt="AllMoviesHub" className="main-logo-mobile" width={200} height={200} style={{'width':"auto", 'height':"auto"}} priority />
                          <Image src="/dsfsdfad_pdfds.png" alt="AllMoviesHub" className="sticky-logo" width={200} height={200} style={{'width':"auto", 'height':"auto"}} priority />
                        </Link>
                      </div>
                    </div>
                    <div className="site__col float-left nav-menu nav-menu-control navigation-font">
                      <ul>
                        <li id="menu-item-8340" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-home menu-item-8340"><Link href="https://allmovieshub.gay">HOME</Link></li>
                        <li id="menu-item-8337" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8337"><Link href="https://allmovieshub.gay/category/bollywood-movies/">Bollywood Movies</Link></li>
                        <li id="menu-item-8338" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8338"><Link href="https://allmovieshub.gay/category/hollywood-hindi-dubbed/">Hollywood Hindi Dubbed</Link></li>
                        <li id="menu-item-8339" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8339"><Link href="https://allmovieshub.gay/category/south-hindi-dubbed/">South Hindi Dubbed</Link></li>
                        <li id="menu-item-8341" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8341"><Link href="https://allmovieshub.gay/category/hindi-dubbed-movies/">Hindi Dubbed Movies</Link></li>
                        <li id="menu-item-8342" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8342"><Link href="https://allmovieshub.gay/category/web-series/">Web Series</Link></li>
                      </ul>
                    </div>
                    <div className="site__col float-left nav-mobile-menu">
                      <div className="button-wrap">
                        <div className="button-menu-mobile button-menu-mobile-control">
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                    <div className="site__col float-right top-search-box-mobile">
                      <ul>
                        <li className="top-search-elm top-search-elm-control">
                          <Link href="#" title="Search" className="top-search-dropdown top-search-dropdown-control">
                            <span className="icon">
                              <i className="fa fa-search" aria-hidden="true" />
                            </span>
                          </Link>
                          <ul className="dark-background">
                            <li className="top-search-box-dropdown">
                              <form action="https://allmovieshub.gay/" method="get">
                                <input className="search-terms-textfield search-terms-textfield-control" autoComplete="off" type="text" placeholder="Type and hit enter ..." name="s" />
                                <input type="submit" defaultValue="Search" />
                              </form>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="site__col float-right top-login-box-mobile">
                    </div>
                    <div className="site__col float-right top-search-box">
                      <div className="top-search-box-wrapper">
                        <form action="https://allmovieshub.gay/" method="get">
                          <input className="search-terms-textfield search-terms-textfield-control" autoComplete="off" type="text" placeholder="Search..." name="s" />
                          <i className="fa fa-search" aria-hidden="true" />
                          <input type="submit" defaultValue="Search" />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div id="header-social">
            <Link href="/category/dual-audio-movies/" rel="noopener">
              <span className="button bollywood"> Dual Audio Content </span>
            </Link>
            <Link href="https://moviesrock18.xyz/" target="_blank" rel="noopener">
              <span className="button desijunx">
                <div className="adultimg">
                  <Image priority src="/croppfgdfg.webp" alt="18image" width={20} height={20} />
                </div>
                Desi Junction </span>
            </Link>
            <Link href="https://telegram.dog/moviesrock_Official">
              <span className="button buttontg"><i className="fa-brands fa-telegram" /> Join Telegram </span>
            </Link>
            <Link href="/how-to-download/">
              <span className="button howtodl"> How To Download <i className="fa fa-eye" /> </span>
            </Link>
          </div>
          <div id="header-category">
            <Link href="/category/480p/">
              <span className="hcategory hccateg"> 480p </span>
            </Link>
            <Link href="/category/720p/">
              <span className="hcategory hccateg"> 720p </span>
            </Link>
            <Link href="/category/1080p/">
              <span className="hcategory hccateg"> 1080p </span>
            </Link>
            <Link href="/category/2160p/">
              <span className="hcategory hccateg"> 2160p <strong>4K</strong> </span>
            </Link>
            <Link href="/category/netflix/">
              <span className="hcategory hccateg"> Netflix </span>
            </Link>
            <Link href="/category/amazon-prime-video/">
              <span className="hcategory hccateg"> AMZN Prime Video </span>
            </Link>
            <Link href="/category/disney-hotstar/">
              <span className="hcategory hccateg"> Disney+ Hotstar </span>
            </Link>
            <Link href="/category/sony-liv/">
              <span className="hcategory hccateg"> SonyLIV </span>
            </Link>
            <Link href="/category/zee5/">
              <span className="hcategory hccateg"> ZEE5 </span>
            </Link>
            <Link href="/category/jiocinema/">
              <span className="hcategory hccateg"> JioCinema </span>
            </Link>
            <Link href="/category/hoichoi/">
              <span className="hcategory hccateg"> Hoichoi </span>
            </Link>
            <Link href="/category/alt/">
              <span className="hcategory hccateg"> ALTBalaji </span>
            </Link>
            <Link href="/category/bengali/">
              <span className="hcategory hccateg"> Bengali </span>
            </Link>
            <Link href="/category/gujarati/">
              <span className="hcategory hccateg"> Gujarati </span>
            </Link>
            <Link href="/category/punjabi/">
              <span className="hcategory hccateg"> Punjabi Movies </span>
            </Link>
            <Link href="/category/marathi/">
              <span className="hcategory hccateg"> Marathi Movies </span>
            </Link>
            <Link href="/category/hindi-dubbed-movies/">
              <span className="hcategory hccateg"> Hindi Dubbed Movies </span>
            </Link>
            <Link href="/category/hollywood-hindi-dubbed/">
              <span className="hcategory hccateg"> Hollywood Hindi Dubbed </span>
            </Link>
            <Link href="/category/South-hindi-dubbed/">
              <span className="hcategory hccateg"> South Hindi Dubbed </span>
            </Link>
            <Link href="/category/bollywood-movies/">
              <span className="hcategory hccateg"> Bollywood Movies </span>
            </Link>
            <Link href="/web-series/">
              <span className="hcategory hccateg"> Web Series </span>
            </Link>
          </div>
          <center>
            <form role="search" method="get" id="searchform" action="/">
              <input type="text" className="searchm" name="s" id="s" placeholder="Search Movies or WEB-Series here...." />
            </form>
          </center>


          <div id="primary-content-wrap" className="primary-content-wrap">
            <div className="primary-content-control">
              <div className="site__container fullwidth-vidorev-ctrl container-control">

                {/* HERE IS BLOG POST AND MAIN CONTENT SHOWING PART -- START*/}
                {/* <BlogPost /> */}
                <MoviePage />
                <Footer />
                {/* HERE IS BLOG POST AND MAIN CONTENT SHOWING PART  -- END*/}

              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="scroll-to-top-button scroll-to-top-button-control">
        <Link className="basic-button basic-button-default" href="#">Top<i className="fa fa-arrow-circle-up" aria-hidden="true" /></Link>
      </div>
      <div id="vp-mobile-menu" className="dark-background vp-mobile-menu-control">
        <div className="vp-mobile-menu-body">
          <div className="button-menu-mobile button-menu-mobile-control">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="mobile-menu-social">
            <ul className="social-block s-grid mobile-style">
              <li className="watch-later-elm">
                <Link href="#" title="Notifications" className="top-watch-dropdown">
                  <span className="icon">
                    <i className="fa fa-bell" aria-hidden="true" />
                  </span>
                </Link>
                <ul className="top-watch-later-listing dark-background">
                  <li className="top-watch-later-items no-video" />
                  <li className="watch-no-video">
                    <div>
                      <i className="fa fa-file-video-o" aria-hidden="true" /><br />
                      Don't miss new videos<br />
                      Sign in to see updates from your favourite channels<br /><br />
                      <br />
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="vp-mobile-menu-items vp-mobile-menu-items-control navigation-font">
            <ul>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-home menu-item-8340"><Link href="https://allmovieshub.gay">HOME</Link></li>
              <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8337"><Link href="https://allmovieshub.gay/category/bollywood-movies/">Bollywood Movies</Link></li>
              <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8338"><Link href="https://allmovieshub.gay/category/hollywood-hindi-dubbed/">Hollywood Hindi Dubbed</Link></li>
              <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8339"><Link href="https://allmovieshub.gay/category/south-hindi-dubbed/">South Hindi Dubbed</Link></li>
              <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8341"><Link href="https://allmovieshub.gay/category/hindi-dubbed-movies/">Hindi Dubbed Movies</Link></li>
              <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8342"><Link href="https://allmovieshub.gay/category/web-series/">Web Series</Link></li>
            </ul>
            <ul className="membership-submit-video-mobile-menu" />
          </div>
        </div>
      </div>
    </>

  );
}
