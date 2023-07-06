// 풋터 앨범 이미지
function footAlbumImg(){
    const footAlbumImgLi = [];
    for(var i=1; i<10; i++){
        footAlbumImgLi.push(<li key={i}><div className={"foot-album-div foot-album-div" + i} style={{ background:'url' + '(/assets/img/footerAlbum0' + i + '.png) no-repeat center / cover'  }}></div></li>)
    }
    return footAlbumImgLi;
}

// 풋터 이동 링크
const footSns = [
    {snsLink:'https://www.facebook.com/mgffofficial', firWord:'F', lastWord:'ACEBOOK'},
    {snsLink:'https://instagram.com/mgff_official', firWord:'I', lastWord:'STARGRAM'},
    {snsLink:'https://www.youtube.com/channel/UCCRAFwORMM9WwuIcdc9va2w', firWord:'Y', lastWord:'OUTUBE'},
    {snsLink:'mailto:Mgff_official@naver.com', firWord:'E', lastWord:'MAIL'},
]
const footEtcLink = [
    {EtcLink:'https://marpple.shop/kr/mgff?page=0', EtcLinkTit:'MGFF SHOP'},
    {EtcLink:'https://smartstore.naver.com/mgffstore', EtcLinkTit:'MGFF Smartstore'},
    {EtcLink:'https://streamlink.to/Moim', EtcLinkTit:'MOIM Streaming'},
    {EtcLink:'https://smartstore.naver.com/irrelevant/products/8079577043', EtcLinkTit:'‘MUFFY’ Vinyl Purchase'},
    {EtcLink:'https://smartstore.naver.com/mgffstore/products/7965675980', EtcLinkTit:'‘MOIM’ Purchase'},
    {EtcLink:'https://music.3pm.earth/ko/collection/MGFF', EtcLinkTit:'Daydream of a MGFF'},
    {EtcLink:'https://ticket.melon.com/performance/index.htm?prodId=208402', EtcLinkTit:'MGFF X IGLOOBAY'},
]

export default function Footer(){
    return (
        <>
            <footer className="at-footer" >
                <div className="at-footer-inner">
                    <div className="top">
                        <ul className="album">
                            {footAlbumImg()}
                        </ul>
                        <p className="footer-b-txt">MGFF</p>
                    </div>
                    <div className="bott">
                        <ul className="sns">
                            {footSns.map((sns) => {
                                return (
                                    <li key={sns.snsLink}><a className="sm-txt-4" href={sns.snsLink} target="_blank" rel="noopener noreferrer"><span>{sns.firWord}</span>{sns.lastWord}</a></li>
                                )
                            })}
                        </ul>
                        <div className="link-etc">
                            <ul>
                                {footEtcLink.map((etc) => {
                                    return (
                                        <li key={etc.EtcLink}><a className="sb-txt-4" href={etc.EtcLink} target="_blank" rel="noopener noreferrer">{etc.EtcLinkTit}</a></li>
                                    )
                                })}
                            </ul>
                            <ul>
                                <li><p className="b-txt-5">2016.11.09</p></li>
                                <li><p className="sb-txt-4">Copyright MGFF. All rights</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}