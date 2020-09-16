import Link from 'next/link';

const CategoryBanner = () => {
    return(
        <>
            <div className="categories-banner-area">
                <div className="ui grid">
                    <div className="four wide column">
                        <div className="single-categories-box">
                            <img src="https://res.cloudinary.com/dev-empty/image/upload/v1589823075/categories-img1.jpg" alt="category"/>

                            <div className="content text-white">
                                <span>Espeto de Carne</span>
                                <h3>10% Desconto</h3>
                                <Link href="/products?term=churrasco">
                                    <a className="default-btn">Descubra Agora</a>
                                </Link>
                            </div>
                            <Link href="/products?term=churrasco">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="four wide column">
                        <div className="single-categories-box">
                            <img src="https://res.cloudinary.com/dev-empty/image/upload/v1589823075/categories-img2.jpg" alt="category"/>
                            
                            <div className="content">
                                <span>Novos Sabores</span>
                                <h3>Conheça Agora</h3>
                                <Link href="/products?term=churrasco">
                                    <a className="default-btn">Descubra Agora</a>
                                </Link>
                            </div>
                            <Link href="/products?term=espetos">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="four wide column">
                        <div className="single-categories-box">
                            <img src="https://res.cloudinary.com/dev-empty/image/upload/v1589823075/categories-img3.jpg" alt="category"/>
                            
                            <div className="content">
                                <span>Espeto de Tilapia</span>
                                <h3>Poucas Unidades</h3>
                                <Link href="/products?term=churrasco">
                                    <a className="default-btn">Descubra Agora</a>
                                </Link>
                            </div>
                            <Link href="/products?term=churrasco">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="four wide column">
                        <div className="single-categories-box">
                            <img src="https://res.cloudinary.com/dev-empty/image/upload/v1589823075/categories-img4.jpg" alt="category"/>
                             
                            <div className="content text-white">
                                <span>Com Desconto</span>
                                <h3>Espetos em promoção!</h3>
                                <Link href="/products?term=churrasco">
                                    <a className="default-btn">Descubra Agora</a>
                                </Link>
                            </div>
                            <Link href="/products?term=churrasco">
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