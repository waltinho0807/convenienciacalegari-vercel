import React from 'react';
import Link from "next/link";
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { handleLogout } from '../../utils/auth';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const StaticHeader = ({ user }) => {
    const router = useRouter();
    const [menuActive, setMenuActive] = React.useState(false);
    const [search, setSearch] = React.useState({search: ''})
    // console.log(user)
    const isRoot = user && user.role == 'root';
    const isAdmin = user && user.role == 'admin';
    const isRootOrAdmin = isRoot || isAdmin;

    const isActive = (route) => {
        return route == router.pathname;
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setSearch(prevState => ({...prevState, [name]: value}) )
    }

    const handleSearch = (e) => {
        Router.push({
            pathname: '/products',
            query: {term: search.search}
        })
    }

    const menuToggle = () => {
        setMenuActive(!menuActive)
    }

    return(
        <div className="ui grid navbar-area">
            <div className="computer tablet only row">
                <div className="ui inverted fixed menu navbar page grid">
                    <Link href="/">
                        <a className={`item ${isActive('/') ? 'active' : null}`}>
                            <i className="home icon"></i>
                            Home
                        </a>
                    </Link>
                    <div className="ui simple dropdown item">
                        Home Paginas
                        <i className="dropdown icon"></i>
                        <div className="menu">
                            <Link href="/">
                                <a className={`item ${isActive('/') ? 'active' : null}`}>
                                    <i className="shopping basket icon"></i>
                                    Mercearia Exclusivo
                                </a>
                            </Link>
                            <Link href="/bebidas">
                                <a className={`item ${isActive('/bebidas') ? 'active' : null}`}>
                                    <i className=""></i>
                                    Bebidas Exclusivo
                                </a>
                            </Link>
                            <Link href="/churrasco">
                                <a className={`item ${isActive('/importados') ? 'active' : null}`}>
                                    <i className=""></i>
                                    Importados Exclusivo
                                </a>
                            </Link>
                            <Link href="/massas">
                                <a className={`item ${isActive('/massas') ? 'active' : null}`}>
                                    <i className=""></i>
                                    Massas Exclusivo
                                </a>
                            </Link>
                            <Link href="/congelados">
                                <a className={`item ${isActive('/congelados') ? 'active' : null}`}>
                                    <i className=""></i>
                                    Congelados Exclusivo
                                </a>
                            </Link>
                            <Link href="/churrasco">
                                <a className={`item ${isActive('/churrasco') ? 'active' : null}`}>
                                    <i className=""></i>
                                    Churrasco Exclusivo
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="ui simple dropdown item">
                        Produtos
                        <i className="dropdown icon"></i>
                        <div className="menu">
                            <Link href="/products?term=mercearia">
                                <a className={`item`}>
                                    Mercearia
                                </a>
                            </Link>
                            <Link href="/products?term=bebidas">
                                <a className={`item`}>
                                    Bebidas
                                </a>
                            </Link>
                            <Link href="/products?term=importados">
                                <a className={`item`}>
                                    Importados
                                </a>
                            </Link>
                            <Link href="/products?term=massas">
                                <a className={`item`}>
                                    Massas
                                </a>
                            </Link>
                            <Link href="/products?term=congelados">
                                <a className={`item`}>
                                    Congelados
                                </a>
                            </Link>
                            <Link href="/products?term=churrasco">
                                <a className={`item`}>
                                    Churrasco
                                </a>
                            </Link>
                            <Link href="/products">
                                <a className={`item`}>
                                    Todos Produtos
                                </a>
                            </Link>
                        </div>
                    </div>
                    <Link href="/cart">
                        <a className={`item ${isActive('/cart') ? 'active' : null}`}>Carrinho</a>
                    </Link>
                    <Link href="/about">
                        <a className={`item ${isActive('/about') ? 'active' : null}`}>Sobre</a>
                    </Link>

                    <div className="right menu">
                        {user ? (
                            <>
                                <div className="ui simple dropdown item">
                                    {user.name}
                                    <i className="dropdown icon"></i>
                                    <div className="menu">
                                        {isRootOrAdmin && (
                                            <Link href="/admin/dashboard">
                                                <a className={`item ${isActive('/admin/dashboard') ? 'active' : null}`}>
                                                    <i className="dashboard icon"></i>
                                                    Dashboard
                                                </a>
                                            </Link>
                                        )}
                                        
                                        <Link href="/profile">
                                            <a className={`item ${isActive('/profile') ? 'active' : null}`}>
                                                <i className="user icon"></i>
                                                Meu Perfil
                                            </a>
                                        </Link>
                                        <Link href="/my-orders-history">
                                            <a className={`item ${isActive('/my-orders-history') ? 'active' : null}`}>
                                                <i className="history icon"></i>
                                                 Historico Ordems
                                            </a>
                                        </Link>
                                        <div className="divider"></div>
                                        <Link href="#">
                                            <a className={`item`} onClick={e => {e.preventDefault(); handleLogout()}}>
                                                <i className="sign-out icon"></i>
                                                Sair
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <React.Fragment>
                                <Link href="/auth/login">
                                    <a className={`item ${isActive('/auth/login') ? 'active' : null}`}>
                                        Entrar
                                    </a>
                                </Link>

                                <Link href="/auth/signup">
                                    <a className={`item ${isActive('/auth/signup') ? 'active' : null}`}>
                                        Cadastro
                                    </a>
                                </Link>
                            </React.Fragment>
                        )}
                        <form className="ui form" onSubmit={e => {e.preventDefault();handleSearch()}}>
                            <div className="ui transparent icon input">
                                <input 
                                    className="prompt" 
                                    type="text" 
                                    placeholder="Search..." 
                                    name='search'
                                    value={search.search}
                                    onChange={handleOnChange}
                                />
                                <i onClick={e => {e.preventDefault();handleSearch()}} className="search link icon"></i>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Mobile Nav */}
            <div className="mobile only row">
                <div className="ui fixed inverted navbar menu">
                    <Link href="/">
                        <a className="brand item">Conveniencia</a>
                    </Link>
                    <div className="right menu open">
                        <Link href="#">
                            <a onClick={e => {e.preventDefault(); menuToggle()}} className="menu item">
                                <i className="align justify icon"></i>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={`ui vertical navbar menu ${menuActive ? 'mobile-active-show' : 'mobile-active-hide'}`}>
                    <Link href="/">
                        <a className={`item ${isActive('/') ? 'active' : null}`} onClick={menuToggle}>
                            <i className="home icon"></i>
                            Home
                        </a>
                    </Link>
                    <div className="ui simple pointing left dropdown item">
                         Paginas
                        <i className="dropdown icon"></i>
                        <div className="menu">
                            <Link href="/">
                                <a className={`item ${isActive('/') ? 'active' : null}`} onClick={menuToggle}>
                                    <i className="shopping basket icon"></i>
                                    Mercearia Exclusivo
                                </a>
                            </Link>
                            <Link href="/bebidas">
                                <a className={`item ${isActive('/bebidas') ? 'active' : null}`} onClick={menuToggle}>
                                    <i className="medrt icon"></i>
                                    Bebidas Exclusivo
                                </a>
                            </Link>
                            <Link href="/importados">
                                <a className={`item ${isActive('/importados') ? 'active' : null}`} onClick={menuToggle}>
                                    <i className="won icon"></i>
                                    Importados Exclusivo
                                </a>
                            </Link>
                            <Link href="/massas">
                                <a className={`item ${isActive('/massas') ? 'active' : null}`} onClick={menuToggle}>
                                    <i className="television icon"></i>
                                    Massas Exclusivo
                                </a>
                            </Link>
                            <Link href="/congelados">
                                <a className={`item ${isActive('/congelados') ? 'active' : null}`} onClick={menuToggle}>
                                    <i className="braille icon"></i>
                                    Congelados Exclusivo
                                </a>
                            </Link>
                            <Link href="/churrasco">
                                <a className={`item ${isActive('/churrasco') ? 'active' : null}`} onClick={menuToggle}>
                                    <i className="certificate icon"></i>
                                    Churrasco Exclisivo
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="ui simple pointing left dropdown item">
                        Produtos
                        <i className="dropdown icon"></i>
                        <div className="menu">
                            <Link href="/products?term=mercearia">
                                <a className={`item`} onClick={menuToggle}>
                                    Mercearia
                                </a>
                            </Link>
                            <Link href="/products?term=bebidas">
                                <a className={`item`} onClick={menuToggle}>
                                    Bebidas
                                </a>
                            </Link>
                            <Link href="/products?term=importados">
                                <a className={`item`} onClick={menuToggle}>
                                    Importados
                                </a>
                            </Link>
                            <Link href="/products?term=massas">
                                <a className={`item`} onClick={menuToggle}>
                                    Massas
                                </a>
                            </Link>
                            <Link href="/products?term=congelados">
                                <a className={`item`} onClick={menuToggle}>
                                    Congelados
                                </a>
                            </Link>
                            <Link href="/products?term=churrasco">
                                <a className={`item`} onClick={menuToggle}>
                                    Churrasco
                                </a>
                            </Link>
                            <Link href="/products">
                                <a className={`item`} onClick={menuToggle}>
                                    Todos Produtos
                                </a>
                            </Link>
                        </div>
                    </div>
                    <Link href="/cart">
                        <a className={`item ${isActive('/cart') ? 'active' : null}`} onClick={menuToggle}>Carrinho</a>
                    </Link>
                    <Link href="/about">
                        <a className={`item ${isActive('/about') ? 'active' : null}`} onClick={menuToggle}>Sobre</a>
                    </Link>

                    <div className="menu root-user">
                        {user ? (
                            <>
                                <div className="ui simple dropdown item">
                                    {user.name}
                                    <i className="dropdown icon"></i>
                                    <div className="menu">
                                        {isRootOrAdmin && (
                                            <Link href="/admin/dashboard">
                                                <a className={`item ${isActive('/admin/dashboard') ? 'active' : null}`} onClick={menuToggle}>
                                                    <i className="dashboard icon"></i>
                                                    Dashboard
                                                </a>
                                            </Link>
                                        )}
                                        
                                        <Link href="/profile">
                                            <a className={`item ${isActive('/profile') ? 'active' : null}`} onClick={menuToggle}>
                                                <i className="user icon"></i>
                                                Meu Perfil
                                            </a>
                                        </Link>
                                        <Link href="/my-orders-history">
                                            <a className={`item ${isActive('/my-orders-history') ? 'active' : null}`} onClick={menuToggle}>
                                                <i className="history icon"></i>
                                                Minhas Ordems
                                            </a>
                                        </Link>
                                        <div className="divider"></div>
                                        <Link href="#">
                                            <a className={`item`} onClick={handleLogout} onClick={menuToggle}>
                                                <i className="sign-out icon"></i>
                                                Sair
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <React.Fragment>
                                <Link href="/auth/login">
                                    <a className={`item ${isActive('/auth/login') ? 'active' : null}`} onClick={menuToggle}>
                                        Entrar
                                    </a>
                                </Link>

                                <Link href="/auth/signup">
                                    <a className={`item ${isActive('/auth/signup') ? 'active' : null}`} onClick={menuToggle}>
                                        Cadastro
                                    </a>
                                </Link>
                            </React.Fragment>
                        )}
                        <form className="ui form" onSubmit={e => {e.preventDefault(); handleSearch(); menuToggle()}}>
                            <div className="ui transparent icon input">
                                <input 
                                    className="prompt" 
                                    type="text" 
                                    placeholder="Search..." 
                                    name='search'
                                    value={search.search}
                                    onChange={handleOnChange}
                                />
                                <i onClick={e => {e.preventDefault();handleSearch(); menuToggle()}} className="search link icon"></i>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StaticHeader;