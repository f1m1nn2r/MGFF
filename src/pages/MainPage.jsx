import React from 'react';

// img
import MainRepAlbum from '../assets/img/MainRepAlbum.png';
import EtcAlbum01 from '../assets/img/EtcAlbum01.png';
import EtcAlbum02 from '../assets/img/EtcAlbum02.png';
import EtcAlbum03 from '../assets/img/EtcAlbum03.png';
import EtcAlbum04 from '../assets/img/EtcAlbum04.png';
import EtcAlbum05 from '../assets/img/EtcAlbum05.png';

export default function MainPage(){
    const EtcAlbum = [
        {albumImg:EtcAlbum02, title:'Malibu', date:'2022.08.02'},
        {albumImg:EtcAlbum03, title:'SPY', date:'2022.04.08'},
        {albumImg:EtcAlbum04, title:'Highway', date:'2022.01.03'},
        {albumImg:EtcAlbum05, title:'MUFFY', date:'2018.06.29'},
    ]
    return (
        <>
            <main className='main-container'>
                <section className='section section01'>
                    <div className="section01-inner">
                        <div className="rep-album"><img src={MainRepAlbum} alt={MainRepAlbum} /></div>
                        <div className="rep-album-txt">
                            <div className='b-txt-5'>
                                <p>MOIM</p>
                                <p>2013.01.19</p>
                            </div>
                            <a href="https://streamlink.to/Moim" target="_blank" rel="noopener noreferrer"><span></span></a>
                        </div>
                    </div>
                </section>
                <section className="section section02">
                    <div className="section02-inner">
                        <div className="etc-album-left">
                            <div className="album-img-box"><img src={EtcAlbum01} alt={EtcAlbum01} /></div>
                            <div className="etc-album-txt">
                                <p className="m-txt-5">Whisky</p>
                                <p className='sm-txt-4'>2022.10.22</p>
                            </div>
                        </div>
                        <ul className="etc-album-right">
                            {EtcAlbum.map((album) => {
                                return (
                                    <li key={album.title}>
                                        <div className="album-img-box"><img src={album.albumImg} alt={album.albumImg} /></div>
                                        <div className="etc-album-txt">
                                            <p className="m-txt-5">{album.title}</p>
                                            <p className='sm-txt-4'>{album.date}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>
            </main>
        </>
    )
}