import React, { useState } from 'react';
import { Form, Col, Card, Button, Row } from 'react-bootstrap';
import firebase from '../../firebaseConnections';

import { useHistory } from 'react-router-dom'

export default function Create(){

    const [name, setName] = useState('');
    const [task, setTask] = useState('');
    const [data, setData] = useState('');

    const history = useHistory();

    function cadastrar(e){

        let tarefas = firebase.database().ref('tasks');
        let chave = tarefas.push().key;
        tarefas.child(chave).set({
            name: name,
            task: task,
            data: data
        }); 

        alert('Registration saved successfully!');
        e.preventDefault();
        history.goBack();
    }
    
    return(        
            <div>
    
                <Card>
                    <Card.Header>
                        <span>Add Task</span>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={cadastrar}>
                            <Form.Group as={Row} className="justify-content-md-center" controlId="formHorizontalName" fluid>
                                <Form.Label column sm={1}>
                                Name
                                </Form.Label>
                                <Col sm={5}>
                                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="enter your name" required/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="justify-content-md-center" controlId="formHorizontalTask">
                                <Form.Label column sm={1}>
                                Task
                                </Form.Label>
                                <Col sm={5}>
                                <Form.Control type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="register the task" required/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="justify-content-md-center" controlId="formHorizontalDate">
                                <Form.Label column sm={1}>
                                Date
                                </Form.Label>
                                <Col sm={5}>
                                <Form.Control type="date" value={data} onChange={(e) => setData(e.target.value)} required/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Col sm={{ span: 5, offset: 4   }}>
                                <Button type="submit">Save</Button>
                                </Col>
                            </Form.Group>
                        </Form>                         
                    </Card.Body>
                </Card>
           </div>
        )   
    
}