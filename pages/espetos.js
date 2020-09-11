import React from 'react';
import axios from 'axios';
import Banner from '../components/Espetos/Banner';
import CategoryBanner from '../components/Espetos/CategoryBanner';
import OfferArea from '../components/Espetos/OfferArea';
import HotProducts from '../components/Espetos/HotProducts';
import baseUrl from '../utils/baseUrl';

const Home = ({ products }) => {
    // console.log(products)
    return(
        <React.Fragment>
            <Banner />
            <CategoryBanner />
            <HotProducts products={products} />
            <OfferArea />
        </React.Fragment>
    );
}

Home.getInitialProps = async (ctx) => {
    // console.log(ctx.query)
    const page = ctx.query.page ? ctx.query.page : "1";
    const size = 8;
    const searchTerm = "fashion";
    // fetch data on server
    const url = `${baseUrl}/api/products`;
    const payload = { params: {page, size, searchTerm}}
    const response = await axios.get(url, payload);
    // return response data as an object
    return response.data
    // note: this object will be merge with existing props
}

export default Home;
