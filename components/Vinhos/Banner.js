import Link from 'next/link';

const Banner = () => {
    return(
        <div className="grocery-main-banner electronics-bg">
            <div className="grocery-banner-content">
                <h1>Confira Nossos Vinhos</h1>
                <p>Vinhos Nacionais e Importados!</p>
                <h2>Com Descontos Pelo Site</h2>
                <Link href="/products?term=vinhos">
                    <a className="default-btn">Compre Agora</a>
                </Link>
            </div>
        </div>
    );
}

export default Banner;