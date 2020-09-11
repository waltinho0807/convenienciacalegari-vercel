import Link from 'next/link';

const CategoryBanner = () => {
    return(
        <div className="grocery-categories-banner-area">
            <div className="ui grid">
                <div className="four wide column">
                    <div className="single-grocery-categories-box">
                        <img src="https://res.cloudinary.com/dev-empty/image/upload/v1590075846/covid-category1.jpg" alt="Categories" />

                        <div className="content">
                            <span>10% Desconto</span>
                            <h3>Vodkas</h3>
                            <Link href="/products?term=bebidas">
                                <a className="default-btn">Compre Agora</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="four wide column">
                    <div className="single-grocery-categories-box">
                        <img src="https://res.cloudinary.com/dev-empty/image/upload/v1590075914/covid-category2.jpg" alt="Categories" />

                        <div className="content">
                            <span>20% Desconto</span>
                            <h3>Wiskhy</h3>
                            <Link href="/products?term=bebidas">
                                <a className="default-btn">Compre Agora</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="four wide column">
                    <div className="single-grocery-categories-box">
                        <img src="https://res.cloudinary.com/dev-empty/image/upload/v1590075935/covid-category3.jpg" alt="Categories" />

                        <div className="content">
                            <span>10% Desconto</span>
                            <h3>Gym</h3>
                            <Link href="/products?term=bebidas">
                                <a className="default-btn">Compre Agora</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="four wide column">
                    <div className="single-grocery-categories-box">
                        <img src="https://res.cloudinary.com/dev-empty/image/upload/v1590075960/covid-category4.jpg" alt="Categories" />

                        <div className="content">
                            <span>20% OFF</span>
                            <h3>Artesanais</h3>
                            <Link href="/products?term=bebidas">
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