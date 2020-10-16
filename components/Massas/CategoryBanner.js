import Link from 'next/link';

const CategoryBanner = () => {
    return(
        <div className="grocery-categories-banner-area">
            <div className="ui grid">
                <div className="four wide column">
                    <div className="single-grocery-categories-box jewelry-categorie">
                        <img src="images/massasatual1.jpg" alt="Categories" />

                        <div className="content">
                            <span>Massas de qualidade</span>
                            <h3>Inhoque Recheado</h3>
                            <Link href="/products?term=massas">
                                <a className="default-btn">Compre Agora</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="four wide column">
                    <div className="single-grocery-categories-box jewelry-categorie overly">
                        <img src="images/massas2.jpg" alt="Categories" />

                        <div className="content">
                            <span className="color-white">Varios sabores</span>
                            <h3 className="color-white">Rodelle</h3>
                            <Link href="/products?term=massas">
                                <a className="default-btn">Compre Agora</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="four wide column">
                    <div className="single-grocery-categories-box jewelry-categorie overly">
                        <img src="images/massas3.jpg" alt="Categories" />

                        <div className="content">
                            <span className="color-white">Massas Mais variedas</span>
                            <h3 className="color-white">Rondelle de Espinafre</h3>
                            <Link href="/products?term=massas">
                                <a className="default-btn">Compre Agora</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="four wide column ">
                    <div className="single-grocery-categories-box jewelry-categorie overly">
                        <img src="images/massas4.jpg" alt="Categories" />

                        <div className="content">
                            <span className="color-white">Grande variedade em</span>
                            <h3 className="color-white">Panquecas</h3>
                            <Link href="/products?term=massas">
                                <a className="default-btn">Compre Agora</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryBanner;


 