import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import Banner from "../components/Congelados/Banner"
import CategoryBanner from "../components/Congelados/CategoryBanner"
import HotProducts from "../components/Congelados/HotProducts"

const Furniture = ({products}) => {
    return(
        <>
            <Banner />
            <CategoryBanner />
            <HotProducts products={products} />
        </>
    );
}

Furniture.getInitialProps = async (ctx) => {
    // console.log(ctx.query)
    const page = ctx.query.page ? ctx.query.page : "1";
    const size = 8;
    const searchTerm = "congelados";
    // fetch data on server
    const url = `${baseUrl}/api/products`;
    const payload = { params: {page, size, searchTerm}}
    const response = await axios.get(url, payload);
    // return response data as an object
    return response.data
    // note: this object will be merge with existing props
}

export default Furniture;