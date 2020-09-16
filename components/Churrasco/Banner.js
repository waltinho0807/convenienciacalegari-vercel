import Link from 'next/link';

const Banner = () => {
    return(
        <>
            <div className="main-banner">
                <div className="main-banner-content">
                    <span className="sub-title">Variedade Em Carnes!</span>
                    <h1>Varios Cortes e Tipos!</h1>
                    <p>Churrasco Com Carne De Angus é aqui!</p>
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