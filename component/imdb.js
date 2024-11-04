import React from 'react';
import Image from 'next/image';
import styles from './Imdb.module.css';

export default function Imdb() {
    return (
        <div className="imdbwp imdbwp--movie dark">
            <div className="imdbwp__thumb"><a className="imdbwp__link" title="Venom: The Last Dance" href="https://www.imdb.com/title/tt16366836/" target="_blank" rel="nofollow external noopener noreferrer" data-wpel-link="external">
                <picture>
                    <source
                        srcSet="https://image.tmdb.org/t/p/w185/k42Owka8v91trK1qMYwCQCNwJKr.jpg"
                        type="image/webp"
                    />
                    <img
                        decoding="async"
                        loading="lazy"
                        className="imdbwp__img"
                        src="https://image.tmdb.org/t/p/w185/k42Owka8v91trK1qMYwCQCNwJKr.jpg"
                        width={300}
                        height={300}
                        alt="Image description"
                    />
                </picture>

            </a></div>
            <div className="imdbwp__content">
                <div className="imdbwp__header">
                    <div><span className="imdbwp__title">Venom: The Last Dance</span> (2024)</div>
                    <div className="imdbwp__meta">N/A|Action,Science Fiction,Adventure|October 22, 2024</div>
                </div>
                <div className="imdbwp__belt"><span className="imdbwp__star">6.9</span><span className="imdbwp__rating"><strong>Rating:</strong> 6.9 / 10 from 44 users</span></div>
                <div className="imdbwp__teaser">Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie’s last dance.</div>
                <div className="imdbwp__footer"><strong>Director:</strong> Kelly Marcel<br />
                    <strong>Actors:</strong> Tom Hardy, Chiwetel Ejiofor, Juno Temple, Rhys Ifans</div>
            </div>
        </div>

    );
}
