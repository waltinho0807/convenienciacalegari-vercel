import Link from 'next/link';

const CategoryBanner = () => {
    return(
        <div className="grocery-categories-banner-area">
            <div className="ui grid">
                <div className="four wide column">
                    <div className="single-grocery-categories-box">
                        <img src="https://res.cloudinary.com/dev-empty/image/upload/v1590076747/electronics-category1.jpg" alt="Categories" />

                        <div className="content">
                            <span>10% Desconto</span>
                            <h3>Vinho Pireni</h3>
                            <Link href="/products?term=importados">
                                <a className="default-btn">Compre Agora</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="four wide column">
                    <div className="single-grocery-categories-box">
                        <img src="https://res.cloudinary.com/dev-empty/image/upload/v1590076770/electronics-category2.jpg" alt="Categories" />

                        <div className="content">
                            <span>20% OFF</span>
                            <h3>Vinho Cabernet</h3>
                            <Link href="/products?term=importados">
                                <a className="default-btn">Compre Agora</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="four wide column">
                    <div className="single-grocery-categories-box">
                        <img src="https://res.cloudinary.com/dev-empty/image/upload/v1590076792/electronics-category3.jpg" alt="Categories" />

                        <div className="content">
                            <span>10% Desconto</span>
                            <h3>Vinho Pernambuco</h3>
                            <Link href="/products?term=importados">
                                <a className="default-btn">Compre Agora</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="four wide column">
                    <div className="single-grocery-categories-box">
                        <img src="https://res.cloudinary.com/dev-empty/image/upload/v1590076817/electronics-category4.jpg" alt="Categories" />

                        <div className="content">
                            <span>20% Desconto</span>
                            <h3>Vinho Paschoeto</h3>
                            <Link href="/products?term=importados">
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