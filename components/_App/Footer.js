import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = ({ user }) => {
    const router = useRouter();
    // console.log(user)
    const isRoot = user && user.role == 'root';
    const isAdmin = user && user.role == 'admin';
    // const isRootOrAdmin = isRoot || isAdmin;

    const isActive = (route) => {
        return route == router.pathname;
    }
    return (
        <>
            <footer className="footer-area">
                <div className="ui grid">
                    <div className="four wide column">
                        <div className="single-footer-widget">
                            <h3>Sobre a Loja</h3>

                            <div className="about-the-store">
                                <p>Somos uma conveniencia que faz tudo para manter os preços baixos e produtos de qualidade e sempre inovando.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="four wide column">
                        <div className="single-footer-widget pl-4">
                            <h3>Links Rapidos</h3>

                            <ul className="quick-links">
                                <li>
                                    <Link href="/about">
                                        <a>Sobre</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/products">
                                        <a>Compre Agora!</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/products">
                                        <a>Carrinho</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="four wide column">
                        <div className="single-footer-widget">
                            <h3>Links de Suporte</h3>

                            <ul className="customer-support">
                                {user ? (
                                    <>
                                        <li>
                                            <Link href="/profile">
                                                <a>Meu Perfil</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/my-orders-history">
                                                <a>Minhas Ordens</a>
                                            </Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                    <li>
                                        <Link href="/auth/signup">
                                            <a>Cadastre-se</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/auth/login">
                                            <a>Entre</a>
                                        </Link>
                                    </li>
                                    </>
                                )}
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="four wide column">
                        <div className="single-footer-widget">
                            <h3>Contato</h3>

                            <ul className="footer-contact-info">
                                <li><a href="#" target="_blank">Rua Antonio Duveza, 1123</a></li>
                                <li><a href="tel:+551832823135">+55 18 3282 - 3135</a></li>
                                <li><a href="mailto:hello@shoponix.com">convcalegari@hotmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <p>Copyright &copy; 2020 <a href="/">CalegariSys</a> Designado a <a href="https://envytheme.com/" target="_blank">Conveniencia Calegari</a> | Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;