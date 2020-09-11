import React from 'react';
import { parseCookies } from 'nookies';
import axios from 'axios';
import cookie from 'js-cookie';
import { Segment } from 'semantic-ui-react';
import CartItemList from "../components/Cart/CartItemList"
import CartSummary from "../components/Cart/CartSummary"
import baseUrl from '../utils/baseUrl';
import catchErrors from '../utils/catchErrors';

const Cart = ({ products, user }) => {
    // console.log(products)
    const [cartProducts, setCartProducts] = React.useState(products);
    const [success, setSuccess] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleRemoveFromCart = async (productId) => {
        const url = `${baseUrl}/api/cart`;
        const token = cookie.get("token");
        const payload = {
            params: {productId},
            headers: {Authorization: token}
        };
        const response = await axios.delete(url, payload);
        setCartProducts(response.data);
    }

    const handleCheckout = async (paymentData) => {
        try {
            setLoading(true);
            const url = `${baseUrl}/api/checkout`;
            const token = cookie.get("token");
            const payload = { paymentData };
            const headers = {headers: {Authorization: token}};
            await axios.post(url, payload, headers);
            setSuccess(true);
        } catch (error) {
            catchErrors(error, window.alert);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="cart-area">
            <Segment loading={loading}>
                <CartItemList 
                    handleRemoveFromCart={handleRemoveFromCart}
                    user={user} 
                    products={cartProducts} 
                    success={success}
                />
                <CartSummary 
                    handleCheckout={handleCheckout}
                    products={cartProducts} 
                    success={success}
                />
            </Segment>
        </div>
    );
}

Cart.getInitialProps = async ctx => {
    const { token } = parseCookies(ctx);
    if (!token){
        return { products: [] };
    }
    const url = `${baseUrl}/api/cart`;
    const payload = { headers: {Authorization: token} };
    const response = await axios.get(url, payload);
    return { products: response.data };
}

export default Cart;