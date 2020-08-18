import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function DataGrid(props){

    return(
        <Table striped bordered hover style={{ textAlign: 'center' }}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Task</th>
                <th>Date</th>
                <th>Action</th>
            </tr>
            </thead>
            {
                props.lista.map((itens) => {
                return(
                    <tbody key={itens.key}>
                    <tr>
                        <td>{itens.name}</td>
                        <td>{itens.task}</td>
                        <td>{itens.data.split('-').reverse().join('-')}</td>
                        <td><Button variant="primary" style={{width:'80px' , margin:2}}>
                                <Link className="links" to={`/edit/${itens.key}`}>Edit</Link>            
                            </Button> 
                            <Button variant="danger" style={{width:'80px', margin:2}}
                                onClick={(e) => props.deletar(e, itens.key)}>
                                Delete
                            </Button></td>
                    </tr>
                    </tbody>
                )
                })
            }
        </Table>
    )

} 
