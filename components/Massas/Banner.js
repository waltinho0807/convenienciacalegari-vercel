import Link from 'next/link';

const Banner = () => {
    return(
        <div className="jewelry-main-banner">
            <div className="jewelry-banner-content">
                <div className="line"></div>
                <span className="sub-title">Saboreie Deliosas Massas</span>
                <h1>Massas Prontas</h1>
                <p>Massas deliciosas de otima qualidade preparo muito facil experimente!. Qualidade Garantida </p>
                <Link href="/products?term=massas">
                    <a className="default-btn">Compre Agora</a>
                </Link>
            </div>
        </div>
    );
}

export default Banner;