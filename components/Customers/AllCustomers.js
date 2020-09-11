import { Header, Table, Icon } from 'semantic-ui-react';
import Gravatar from 'react-gravatar';
import formatDate from '../../utils/formatDate';

const AllCustomers = ({customers}) => {
    return(
        <>
        <Header as="h2">
            <Icon name="users" />
            Clientes ({customers.length})
        </Header>
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Foto</Table.HeaderCell>
                    <Table.HeaderCell>Nome</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Entrou</Table.HeaderCell>
                    <Table.HeaderCell>Atualizou</Table.HeaderCell>
                    <Table.HeaderCell>Função</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {customers.map(customer => (
                    <Table.Row>
                        <Table.Cell>
                            <Gravatar email={customer.email} size={50} rating="pg" default="monsterid" />
                        </Table.Cell>
                        <Table.Cell>{customer.name}</Table.Cell>
                        <Table.Cell>{customer.email}</Table.Cell>
                        <Table.Cell>{formatDate(customer.createdAt)}</Table.Cell>
                        <Table.Cell>{formatDate(customer.updatedAt) }</Table.Cell>
                        <Table.Cell>{customer.role === 'admin' ? "Admin" : "Customer"}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
        </>
    );
}

export default AllCustomers;