import React from 'react';
import { Table, Button, TableCell } from 'semantic-ui-react';
import { Todo } from '../Model'
import { useSelector, RootStateOrAny } from 'react-redux';



interface Props {
    APIData: Todo[];
    handleUpdate: (value: Todo) => void
    onDelete: (id: number) => void;
}

const TodoTable: React.FC<Props> = ({ APIData, handleUpdate, onDelete }) => {
    const userId = useSelector((state: RootStateOrAny) => state.authReducer.userId);
    return (
        <>

            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Todo Items</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data, index) => {

                        return (
                            data.userId === userId &&
                            <Table.Row key={index}>
                                <TableCell className="table">{data.todo}</TableCell>
                                <Table.Cell>
                                    <Button onClick={() => handleUpdate(data)}>Update</Button>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>

                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </>
    )
}

export default TodoTable
