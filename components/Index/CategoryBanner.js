import Link from 'next/link';

const CategoryBanner = () => {
    return(
        <div className="grocery-categories-banner-area">
            <div className="ui grid">
                <div className="four wide column">
                    <div className="single-grocery-categories-box">
                        <img src="https://res.cloudinary.com/dye38whh3/image/upload/v1600272182/mercearia/w02yjvucpt0waa1hx8bc.jpg" alt="category"/>

                        <div className="content">
                            <span>Só Aqui</span>
                            <h3>Azeite Spray</h3>
                            <Link href="/products?term=mercearia">
                                <a className="default-btn">Compre Agora</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="four wide column">
                    <div className="single-grocery-categories-box">
                        <img src="https://res.cloudinary.com/dye38whh3/image/upload/v1600272182/mercearia/c4x3ehkxd1jqhxdgbnlh.jpg" alt="category"/>

                        <div className="content">
                            <span>Pronto Para Consumo</span>
                            <h3>Legumes Higienizados</h3>
                            <Link href="/products?term=mercearia">
                                <a className="default-btn">Compre Agora</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="four wide column">
                    <div className="single-grocery-categories-box">
                        <img src="https://res.cloudinary.com/dye38whh3/image/upload/v1600272182/mercearia/ae0oiqdaodxrijbzdzvs.jpg" alt="category"/>

                        <div className="content">
                            <span>Verduras Frescas</span>
                            <h3>Pronto para consumo</h3>
                            <Link href="/products?term=mercearia">
                                <a className="default-btn">Compre Agora</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="four wide column">
                    <div className="single-grocery-categories-box">
                        <img src="https://res.cloudinary.com/dye38whh3/image/upload/v1600272182/mercearia/yv3dlvdt7jro4eh8b0an.jpg" alt="category"/>

                        <div className="content">
                            <span>Chocolate Milk</span>
                            <h3>Sabor incomparavel</h3>
                            <Link href="/products?term=mercearia">
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