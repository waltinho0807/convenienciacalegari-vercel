import React from 'react';
import { parseCookies } from 'nookies';
import axios from 'axios';
import cookie from 'js-cookie';
import { Segment, Divider, Form, Button, Input, Checkbox } from 'semantic-ui-react';
import CartItemList from "../components/Cart/CartItemList"
import baseUrl from '../utils/baseUrl';
import catchErrors from '../utils/catchErrors';
import calculateCartTotal from '../utils/calculateCartTotal';

const INITIAL_ORDER = {
    phone: "",
    forma: "",
    troco: "",
    address: "",
    bairro: "",
    numero: ""
};

const options = [
    { key: 'cartao', text: 'CARTÃO', value: 'cartao' },
    { key: 'dinheiro', text: 'DINHEIRO', value: 'dinheiro' },

]

const Cart = ({ products, user }) => {
    console.log(products)
    const [cartProducts, setCartProducts] = React.useState(products);
    const [success, setSuccess] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const [cartAmout, setCartAmaount] = React.useState(0);
    const [order, setOrder] = React.useState(INITIAL_ORDER);
    const [isCartEmpty, setCartEmpty] = React.useState(false);

    React.useEffect(() => {
        const { cartTotal } = calculateCartTotal(products);
        setCartAmaount(cartTotal);
        setCartEmpty(products.length === 0)
    }, [products]);

    const handleChanhe = e => {
        // console.log(d.value)
        const { name, value } = e.target;
        if (name === 'media') {
            setOrder(prevState => ({ ...prevState, media: files[0] }))
            setMediaPreview(window.URL.createObjectURL(files[0]));
        } else {
            setOrder(prevState => ({ ...prevState, [name]: value }));
        }
        //console.log(order);
    }
    const handleSelectInput = (e, d) => {
        setOrder(prevState => ({ ...prevState, forma: d.value }));
    }

    const handleRemoveFromCart = async (productId) => {
        const url = `${baseUrl}/api/cart`;
        const token = cookie.get("token");
        const payload = {
            params: { productId },
            headers: { Authorization: token }
        };
        const response = await axios.delete(url, payload);
        setCartProducts(response.data);
    }

    const handleCheckout = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const url = `${baseUrl}/api/checkout`;
            const token = cookie.get("token");
            const { phone, forma, troco, address, numero, bairro } = order;
            const payload = { phone, forma, troco, address, numero, bairro };
            const headers = { headers: { Authorization: token } };
            await axios.post(url, payload, headers);
            setOrder(INITIAL_ORDER);
            setSuccess(true);
        } catch (error) {
            catchErrors(error, window.alert);
            console.log(order)
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
                <React.Fragment>
                    <Divider />
                    <Segment clearing size="large" >
                        <strong>Sub total:</strong> ${cartAmout}
                        <Form success={success} onSubmit={handleCheckout}>
                            <Form.Input
                                fluid
                                icon="phone"
                                iconPosition="left"
                                label="Telefone"
                                placeholder="Tel"
                                name="phone"
                                type="text"
                                value={order.phone}
                                onChange={handleChanhe}
                            />

                            <Form.Input
                                fluid
                                icon="shipping"
                                iconPosition="left"
                                label="Rua"
                                placeholder="Rua"
                                name="address"
                                type="text"
                                value={order.address}
                                onChange={handleChanhe}
                            />

                            <Form.Group widths="equal">
                                <Form.Input
                                    fluid
                                    icon="shipping"
                                    iconPosition="left"
                                    label="Bairro"
                                    placeholder="Bairro"
                                    name="bairro"
                                    type="text"
                                    value={order.bairro}
                                    onChange={handleChanhe}
                                />
                                <Form.Input
                                    fluid
                                    label="Numero"
                                    placeholder=" Nº"
                                    name="numero"
                                    type="number"
                                    value={order.numero}
                                    onChange={handleChanhe}
                                />
                            </Form.Group>



                            <Form.Group widths="equal">
                                <Form.Select
                                    name="forma"
                                    label='Forma de Pagamento'
                                    options={options}
                                    placeholder='Como Pagar'
                                    onChange={handleSelectInput}
                                />
                                <Form.Field
                                    control={Input}
                                    name="troco"
                                    label="* Troco para quanto?"
                                    placeholder="Somente se dinheiro"
                                    min="0.00"
                                    step="0.01"
                                    type="number"
                                    onChange={handleChanhe}
                                />
                            </Form.Group>
                            <Form.Field
                                control={Button}
                                type="submit"
                                icon="cart"
                                color="green"
                                floated="right"
                                content="Checkout"
                                disabled={isCartEmpty || success}
                            />
                        </Form>
                    </Segment>

                </React.Fragment>
            </Segment>
        </div>
    );
}

Cart.getInitialProps = async ctx => {
    const { token } = parseCookies(ctx);
    if (!token) {
        return { products: [] };
    }
    const url = `${baseUrl}/api/cart`;
    const payload = { headers: { Authorization: token } };
    const response = await axios.get(url, payload);
    return { products: response.data };
}

export default Cart;