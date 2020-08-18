import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';

export default class App extends Component {

  render(){
    return(
      <div className="App">      
            <Routes />
      </div>
    )
  }
}