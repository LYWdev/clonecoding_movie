import logo from './logo.svg';
import './App.css';
import propType from 'prop-types';
import React from 'react';
import ReactDOM, { render } from 'react-dom';

function Liker({name, pic, rating})
{
  return(
    <div>
    <h1>I Like {name}</h1>
    <img src = {pic} alt = {name} ></img>
    <h2>Raing {rating}/5.0</h2>
    </div>
  ) 
}

Liker.propType={
  name    : propType.string.isRequired,
  id      : propType.string.isRequired,
  pic     : propType.string.isRequired,
  rating  : propType.string.isRequired,
};

const cloudService=[

  {
    id    : 1,
    name  : 'k8s',
    image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1280px-Kubernetes_logo_without_workmark.svg.png' ,
    rating  : 4.7 
  },

  {
    id    : 2,
    name  : 'openwhisk',
    image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/IBM_Bluemix_logo.svg/1280px-IBM_Bluemix_logo.svg.png',
    rating  : 4.7 
  },

  {
    id    : 3,
    name  : 'AWS',
    image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png',
    rating  : 4.7 
  },

  {
    id      : 4,
    name    : 'Azure',
    image   : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1280px-Microsoft_Azure.svg.png',
    rating  : 4.7 
  },
]
//
//  function renderCloud(cloudlist)
//  {
//    return (<Liker key={cloudlist.key} name={cloudlist.name} pic={cloudlist.image} />)
//  }

function App(){
  return (
    <div>
      <h1>Cloud catagory</h1>
      {cloudService.map(cloudService => (
        <Liker key = {cloudService.id} name = {cloudService.name} pic = {cloudService.image} rating={cloudService.rating}/>
      ))}
    </div>
  );
}

export { App,Liker };