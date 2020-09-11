import Link from 'next/link';

const CategoryBanner = () => {
    return(
        <>
            <div className="categories-banner-area">
                <div className="ui grid">
                    <div className="four wide column">
                        <div className="single-categories-box on-hover">
                            <img src="https://res.cloudinary.com/dev-empty/image/upload/v1590079588/furniture-categories-img1.jpg" alt="Categories" />

                            <div className="content text-white">
                                <span>Experimente Novos Sabores</span>
                                <h3>Com Desconto</h3>
                                <Link href="/products?term=congelados">
                                    <a className="default-btn">Compre Agora</a>
                                </Link>
                            </div>
                            <Link href="/products?term=congelados">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="four wide column">
                        <div className="single-categories-box on-hover">
                            <img src="https://res.cloudinary.com/dev-empty/image/upload/v1590079617/furniture-categories-img2.jpg" alt="Categories" />
                            
                            <div className="content">
                                <span>Delicias Praticas</span>
                                <h3>Para Seu Café</h3>
                                <Link href="/products?term=congelados">
                                    <a className="default-btn">Compre Agora</a>
                                </Link>
                            </div>
                            <Link href="/products?term=congelados">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="four wide column">
                        <div className="single-categories-box on-hover">
                            <img src="https://res.cloudinary.com/dev-empty/image/upload/v1590079642/furniture-categories-img3.jpg" alt="Categories" />
                            
                            <div className="content">
                                <span>Diferencial </span>
                                <h3>Só Aqui</h3>
                                <Link href="/products?term=congelados">
                                    <a className="default-btn">Compre Agora</a>
                                </Link>
                            </div>
                            <Link href="/products?term=congelados">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="four wide column">
                        <div className="single-categories-box on-hover">
                            <img src="https://res.cloudinary.com/dev-empty/image/upload/v1590079662/furniture-categories-img4.jpg" alt="Categories" />
                             
                            <div className="content text-white">
                                <span>Pegue 20% Desconto</span>
                                <h3>Coxinha Gourmet!</h3>
                                <Link href="/products?term=congelados">
                                    <a className="default-btn">Compre Agora</a>
                                </Link>
                            </div>
                            <Link href="/products?term=congelados">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryBanner;