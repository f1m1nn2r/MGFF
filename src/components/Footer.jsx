function footAlbumImg(){
    const footAlbumImgLi = [];
    for(var i=1; i<11; i++){
        footAlbumImgLi.push(<li key={i}><div className={"foot-album-div foot-album-div" + i} style={{ background:'url' + '(../assets/img/footerAlbum0' + i + '.png)' }}></div></li>)
    }
    return footAlbumImgLi;
}

export default function Footer(){
    return (
        <>
            <footer className="at-footer" >
                <div className="at-footer-inner">
                    <ul className="album">
                        {footAlbumImg()}
                    </ul>
                </div>
            </footer>
        </>
    )
}