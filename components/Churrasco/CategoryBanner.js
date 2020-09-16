import Link from 'next/link';

const CategoryBanner = () => {
    return(
        <>
            <div className="categories-banner-area">
                <div className="ui grid">
                    <div className="four wide column">
                        <div className="single-categories-box">
                            <img src="https://res.cloudinary.com/dye38whh3/image/upload/v1600279049/conv_calegari/churrasco/qtnqrxltdqeklmma82m5.jpg" alt="category"/>

                            <div className="content text-white">
                                <span>Carnes De Primeira</span>
                                <h3>Variedade em cortes nobres</h3>
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
                            <img src="https://res.cloudinary.com/dye38whh3/image/upload/v1600279048/conv_calegari/churrasco/cc3w3vm11fi51xd2lvqr.jpg" alt="category"/>
                            
                            <div className="content">
                                <span>Produtos Canta Galo</span>
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
                            <img src="https://res.cloudinary.com/dye38whh3/image/upload/v1600279042/conv_calegari/churrasco/vawl9m8yd05zl1ixkedt.jpg" alt="category"/>
                            
                            <div className="content">
                                <span>Grande Variedade em temperos</span>
                                <h3>Toque perfeito</h3>
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
                            <img src="https://res.cloudinary.com/dye38whh3/image/upload/v1600279040/conv_calegari/churrasco/e1ghzhxu0bso4bby5kiw.jpg" alt="category"/>
                             
                            <div className="content text-white">
                                <span>Linguiças do Nerso</span>
                                <h3>Em primeira mão!</h3>
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