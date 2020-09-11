import Link from 'next/link';

const CategoryBanner = () => {
    return(
        <div className="grocery-categories-banner-area">
            <div className="ui grid">
                <div className="four wide column">
                    <div className="single-grocery-categories-box jewelry-categorie">
                        <img src="images/jewelry-category1.jpg" alt="Categories" />

                        <div className="content">
                            <span>10% Desconto</span>
                            <h3>Rondele</h3>
                            <Link href="/products?term=massas">
                                <a className="default-btn">Compre Agora</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="four wide column">
                    <div className="single-grocery-categories-box jewelry-categorie overly">
                        <img src="images/jewelry-category2.jpg" alt="Categories" />

                        <div className="content">
                            <span className="color-white">20% Desconto</span>
                            <h3 className="color-white">Inhoque</h3>
                            <Link href="/products?term=massas">
                                <a className="default-btn">Compre Agora</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="four wide column">
                    <div className="single-grocery-categories-box jewelry-categorie overly">
                        <img src="images/jewelry-category3.jpg" alt="Categories" />

                        <div className="content">
                            <span className="color-white">10% Desconto</span>
                            <h3 className="color-white">Canelone</h3>
                            <Link href="/products?term=massas">
                                <a className="default-btn">Compre Agora</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="four wide column ">
                    <div className="single-grocery-categories-box jewelry-categorie overly">
                        <img src="images/jewelry-category4.jpg" alt="Categories" />

                        <div className="content">
                            <span className="color-white">10% Desconto</span>
                            <h3 className="color-white">Panqueca</h3>
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


 