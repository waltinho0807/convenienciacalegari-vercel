import Link from 'next/link';

const Banner = () => {
    return(
        <div className="covid-main-banner">
            <div className="covid-banner-content">
                <div className="line"></div>
                <span className="sub-title">Bebidas</span>
                <h1>Compre sua bebida</h1>
                <p>Para Maiores de 18 e beba com moderação!, Na Conveniencia Calegari você encontra uma grande variedade de bebidas nacional e importados com melhorespreços e tudo original!</p>
                <Link href="/products?term=bebidas">
                    <a className="default-btn">Shop Now</a>
                </Link>
            </div>
        </div>
    );
}

export default Banner;