import logo from './logo.svg';
import './App.css';
import propType from 'prop-types';
import React from 'react';
import ReactDOM, { render } from 'react-dom';

class App extends React.Component{
  state = {
    count: 0,
  };

  render(){
    return <h1> I'm a class Component</h1>
  }
}

export { App };