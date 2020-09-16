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
            <meta name="twitter:card" content="Conveniencia Calegari- Diferencial em conveniencia"></meta>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
            <meta property="og:image" content="https://res.cloudinary.com/dye38whh3/image/upload/v1600276032/conv_calegari/l54e1fxxagapqlrkys3y.jpg" />
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