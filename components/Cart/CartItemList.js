import { Header, Segment, Button, Icon, Item, Message } from 'semantic-ui-react';
import { useRouter } from 'next/router';

const CartItemList = ({ products, user, handleRemoveFromCart, success }) => {
    // console.log(products)
    // const user = false;
    const router = useRouter();

    const mapCartProductsToItems = (products) => {
        return products.map(p => ({
            childKey: p.product._id,
            header: (
                <Item.Header as="a" onClick={() => router.push(`/product?_id=${p.product._id}`)}>
                    {p.product.name}
                </Item.Header>
            ),
            image: p.product.mediaUrl,
            meta: `${p.quantity} x $${p.product.price}`,
            fluid: true,
            extra: (
                <Button 
                    basic
                    icon="remove"
                    floated="right"
                    onClick={() => handleRemoveFromCart(p.product._id)}
                />
            )
        }))
    }

    if(success){
        return(
            <Message 
                success
                header="sucesso"
                content="Sua ordem de pagamento foi aceita!"
                icon="star outline"
            />
        )
    }

    if(products.length === 0){
        return (
            <Segment
                secondary
                color="green"
                inverted
                textAlign="center"
                placeholder
            >
                <Header icons="true">
                    <Icon name="shopping basket" />
                    Não há produtos no carrinho. Adicione!
                </Header>
                <div>
                    {user ? (
                        <Button
                            color="violet"
                            onClick={() => router.push('/products')}
                        >
                            Visualizar Produtos
                        </Button>
                    ) : (
                        <Button color="blue">
                            Entre Para Adicionar Produtos
                        </Button>
                    )}
                </div>
            </Segment>
        );
    }

    return <Item.Group divided items={mapCartProductsToItems(products)} />

}

export default CartItemList;
