import Link from 'next/link';

const Banner = () => {
    return(
        <>
            <div className="main-banner">
                <div className="main-banner-content">
                    <span className="sub-title">Espetos Congelados!</span>
                    <h1>Varios Sabores!</h1>
                    <p>Churrasco Pratico é aqui!</p>
                    <div className="btn-box">
                        <Link href="/products?term=churrasco">
                            <a className="default-btn">Espetos</a>
                        </Link>
                        <Link href="/products?term=churrasco">
                            <a className="optional-btn">Carnes </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;