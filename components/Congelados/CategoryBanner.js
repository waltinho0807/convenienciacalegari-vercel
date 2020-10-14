import Link from 'next/link';

const CategoryBanner = () => {
    return(
        <>
            <div className="categories-banner-area">
                <div className="ui grid">
                    <div className="four wide column">
                        <div className="single-categories-box on-hover">
                            <img src="https://res.cloudinary.com/dye38whh3/image/upload/v1602683873/congelados/z9kqamevdkfattuotgz5.jpg" alt="Categories" />

                            <div className="content text-white">
                                <span>Experimente Novos Sabores</span>
                                <h3>Com exclusividade</h3>
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
                            <img src="https://res.cloudinary.com/dye38whh3/image/upload/v1602677652/congelados/jbzcxm8fi6jnlfuybmtj.jpg" alt="Categories" />
                            
                            <div className="content">
                                <span>Delicias Praticas </span>
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
                            <img src="https://res.cloudinary.com/dye38whh3/image/upload/v1602677664/congelados/urxejflrgqvj1eustlgb.png" alt="Categories" />
                            
                            <div className="content">
                                <span>Salgados Dferenciados </span>
                                <h3>Não Precisa fritar</h3>
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
                            <img src="https://res.cloudinary.com/dye38whh3/image/upload/v1602677660/congelados/uc2h96odn46reoxzfjsg.jpg" alt="Categories" />
                             
                            <div className="content text-white">
                                <span>Produtos Congelados</span>
                                <h3>Maior variedade em produtos diferenciados!</h3>
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