import Link from 'next/link';

const Banner = () => {
    return(
        <div className="grocery-main-banner">
            <div className="grocery-banner-content">
                <h1>Conveniencia Calegari </h1>
                <p>Produtos de qualidade com preços baixos</p>
                <h2>GÁS R$ 65,00 </h2>
                <Link href="/products?term=mercearia">
                    <a className="default-btn">Compre Agora</a>
                </Link>
            </div>
        </div>
    );
}

export default Banner;