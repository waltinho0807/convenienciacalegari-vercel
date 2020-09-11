import React from 'react';
import Head from "next/head";
import { Container } from "semantic-ui-react";
import Footer from "./Footer";
import GoTop from './GoTop';
import StaticHeader from './StaticHeader';

const Layout = ({ children, user }) => {
    
  return (
    <React.Fragment>
        <Head>
            <title>Conveniencia Calegari</title>
            <meta name="description" content="Compre na melhor conveniencia da região." />
            <meta name="og:title" property="og:title" content="Conveniencia Calegari"></meta>
            <meta name="twitter:card" content="Shoponix - MERN Next eCommerce Store"></meta>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
            <meta property="og:image" content="https://res.cloudinary.com/dev-empty/image/upload/v1590078952/qlm6qb1hzxd6iccmaf82.jpg" />
        </Head>
        
        <StaticHeader user={user} />
            <Container fluid>
                {children}
            </Container>
        <Footer user={user} />
        <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </React.Fragment>
  );
}

export default Layout;