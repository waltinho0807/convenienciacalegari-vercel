import Link from 'next/link';

const Banner = () => {
    return(
        <div className="main-banner furniture-bg">
            <div className="main-banner-content">
                <span className="sub-title">Produtos Congelados</span>
                <h1>Produtos Exclusivos!</h1>
                <p>Comprando Pelo Site Você Ganha Desconto</p>
                <div className="btn-box">
                    <Link href="/products?term=furniture">
                        <a className="default-btn">Compre Agora</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Banner;