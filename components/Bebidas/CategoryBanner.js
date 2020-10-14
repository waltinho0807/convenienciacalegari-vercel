import Link from 'next/link';

const CategoryBanner = () => {
    return(
        <div className="grocery-categories-banner-area">
            <div className="ui grid">
                <div className="four wide column">
                    <div className="single-grocery-categories-box">
                        <img src="https://res.cloudinary.com/dye38whh3/image/upload/v1602676947/bebidas/fd4ujqcc7hpq2fgpswn9.jpg" alt="Categories" />

                        <div className="content">
                            <span>Heineken 600ml</span>
                            <h3>Temos o melhor preço</h3>
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
                            <span>Grande variedade</span>
                            <h3>Em Cervejas de ponta</h3>
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
                            <span>Budweiser Long. Promoção</span>
                            <h3>Leve 6 e Pague 5</h3>
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
                            <span>Grande Variedade Em</span>
                            <h3>Cervejas Artesanais</h3>
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