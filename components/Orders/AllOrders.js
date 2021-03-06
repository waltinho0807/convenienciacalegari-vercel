import { Header, Accordion, Label, Segment, Icon, Button, List, Image } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import OrderStatus from './OrderStatus';

const AllOrders = ({ orders }) => {
    // console.log(orders)
    const router  = useRouter();

    const mapOrdersToPanels = (orders) => {
        return orders.map(order => ({
            key: order._id,
            title: {
                content: (
                    <OrderStatus order={order} />
                )
            },
            content: {
                content: (
                    <>
                        <List.Header as="h3">
                            Total: R${order.total}
                            <Label 
                                content={`${order.address},  ${order.numero},  ${order.bairro}`}
                                icon="shipping"
                                basic
                                horizontal
                                style={{marginLeft: '1em'}}
                            />
                            <Label 
                                content={order.phone}
                                icon="phone"
                                basic
                                horizontal
                                style={{marginLeft: '1em'}}
                            />
                            <Label 
                                content={order.forma}
                                icon="money"
                                basic
                                horizontal
                                style={{marginLeft: '1em'}}
                            />
                            <Label 
                                content={`Troco Para R$ ${order.troco}`}
                                icon="money"
                                basic
                                horizontal
                                style={{marginLeft: '1em'}}
                            />
                        </List.Header>
                        <List>
                            {order.products.map(p => (
                                <List.Item key={p.product._id}>
                                    <Image avatar src={p.product.mediaUrl} />
                                    <List.Content>
                                        <List.Header>
                                            {p.product.name}
                                        </List.Header>
                                        <List.Description>
                                            {p.quantity} x R${p.product.price}
                                        </List.Description>
                                    </List.Content>
                                    <List.Content floated="right">
                                        <Label tag color="red" size="tiny">
                                            {p.product.sku}
                                        </Label>
                                    </List.Content>
                                </List.Item>
                            ))}
                        </List>
                    </>
                )
            }
        }))
    }
    return (
        <>
            <Header as="h2">
                <Icon name="folder open" />
                Ordens
            </Header>
            {orders.length === 0 ? (
                <Segment inverted tertiary color="pink" textAlign="center">
                    <Header icon>
                        <Icon name="copy outline" />
                        Não Há Ordens.
                    </Header>
                    <Button onClick={() => router.push('/products')} color="violet">
                        Ver Produtos
                    </Button>
                </Segment>
            ) : (
                <Accordion 
                    fluid
                    styled
                    exclusive={false}
                    panels={mapOrdersToPanels(orders)}
                />
            )}
        </>
    );
}

export default AllOrders;
