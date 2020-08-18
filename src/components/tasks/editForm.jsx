import React, { useEffect, useState } from 'react';
import { Form, Col, Card, Button, Row } from 'react-bootstrap';
import firebase from '../../firebaseConnections';

import { useHistory } from 'react-router-dom'

export default function Edit (props){

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [task, setTask] = useState('');
    const [data, setData] = useState('');

    const param = props.match.params.id;
    const history = useHistory();

    useEffect(()=> {
        firebase.database().ref('tasks').child(param).on('value', (snapshot) => {

            setId(snapshot.key);
            setName(snapshot.val().name);
            setTask(snapshot.val().task);
            setData(snapshot.val().data);
        });    
    },[])


    function onUpdate(e){

        firebase.database().ref('tasks')
            .child(id).update({
                key: id,
                name: name,
                task: task,
                data: data 
            });

        alert('Registration updated successfully!');
        e.preventDefault();
        history.goBack();
    }
    
        return(        
            <div>
    
                <Card>
                    <Card.Header>
                        <span>Edit Task</span>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={onUpdate}>
                            <Form.Group as={Row} className="justify-content-md-center" controlId="formHorizontalName">
                                <Form.Label column sm={1}>
                                Name
                                </Form.Label>
                                <Col sm={5}>
                                <Form.Control type="hidden" value={id} onChange={(e) => setId(e.target.value)}/>
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
                                <Col sm={{ span: 5, offset: 4 }}>
                                <Button type="submit">Edit</Button>
                                </Col>
                            </Form.Group>
                        </Form>                         
                    </Card.Body>
                </Card>
           </div>
        )   
    
}