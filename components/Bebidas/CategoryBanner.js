import Link from 'next/link';

const CategoryBanner = () => {
    return(
        <div className="grocery-categories-banner-area">
            <div className="ui grid">
                <div className="four wide column">
                    <div className="single-grocery-categories-box">
                        <img src="https://res.cloudinary.com/dye38whh3/image/upload/v1602676947/bebidas/fd4ujqcc7hpq2fgpswn9.jpg" alt="Categories" />

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
                        <img src="https://res.cloudinary.com/dye38whh3/image/upload/v1602682414/bebidas/zhsxxdlr81vkeeigcwm6.jpg" alt="Categories" />

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
                        <img src="https://res.cloudinary.com/dye38whh3/image/upload/v1602682845/bebidas/limssms92korfurw6cfo.jpg" alt="Categories" />

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
                        <img src="https://res.cloudinary.com/dye38whh3/image/upload/v1602682979/bebidas/rpdai3skyoeyfzwt5ns7.jpg" alt="Categories" />

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