import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebase from '../../firebaseConnections';

import DataGrid from './datagrid';

export default function Tasks(){

    const [ lista, setLista ] = useState([]);     

    useEffect(()=> {
        firebase.database().ref('tasks').on('value', (snapshot) => {
    
            const novalista = [];

            snapshot.forEach((item) => {
                novalista.push({
                    key:  item.key,
                    name: item.val().name,
                    task: item.val().task,
                    data: item.val().data
                })
            })
            setLista(novalista)
        });
    },[])


    function deletar(e, value){

        if (window.confirm("Você realmente quer deletar o registro?")) { 
            firebase.database().ref('tasks').child(value).remove();
          }else{
              return false
          }
          
        e.preventDefault();
    }
 
       return(
            <main>
                <Card>
                    <Card.Header>
                        <Link className="links" to="/create"><Button variant="primary">Add</Button></Link>
                    </Card.Header>

                    <Card.Body>
                        <DataGrid lista={lista} deletar={deletar}/>
                    </Card.Body>
                    
                </Card>
                <Card>
             
                </Card>
            </main>
        )


}