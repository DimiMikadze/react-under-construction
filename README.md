# React under construction component [![npm](https://img.shields.io/npm/v/react-under-construction.svg)]()

[![Build Status](https://travis-ci.org/UdiliaInc/react-under-construction.svg?branch=master)](https://travis-ci.org/UdiliaInc/react-under-construction)
[![Dependencies](https://img.shields.io/david/udiliaInc/react-under-construction.svg)]()
[![Dev Dependencies](https://img.shields.io/david/dev/udiliaInc/react-under-construction.svg)]()
[![npm downloads](https://img.shields.io/npm/dm/react-under-construction.svg)](https://www.npmjs.com/package/react-under-construction)

[![NPM](https://nodei.co/npm/react-under-construction.png)](https://npmjs.org/package/react-under-construction)

> An easily customisable, responsive under construction react page component

<img src="https://github.com/udiliaInc/react-under-construction/blob/master/screenshot-demo.jpg" width="800">

## Installation

`npm i react-under-construction --save` or `yarn add react-under-construction `

## Usage

> Note Parent containers should have `width` and `height` 100%, to `react-under-construction` was able to stretch full screen

````
import React from 'react';
import UnderConstruction from 'react-under-construction';
import 'react-under-construction/build/css/index.css';

const App = () => (
  <UnderConstruction
    background={{
      image: 'https://static.pexels.com/photos/259698/pexels-photo-259698.jpeg',
      textColor: '#fff',
      overlay: {
        color: '#000',
        opacity: '.5'
      }
    }}
    logo={{
      src: 'https://image.ibb.co/b7guP5/Rubbby_without_text.png',
      alt: 'alt text'
    }}
    title={{
      text: 'Rubbby'
    }}
    description={{
      text: 'Our website is under construction. We\'ll be here soon, subscribe to be notified',
      style: {
        maxWidth: '440px',
      }
    }}
    subscribe={{
      placeholder: 'Enter your email',
      buttonText: 'Subscribe',
      onSubmit: (value) => {
        console.log('user typed email :', value);
      }
    }}
    links={[
      {
        url: 'https://www.facebook.com/',
        image: 'https://image.flaticon.com/icons/svg/220/220200.svg',
      },
      {
        url: 'https://www.twitter.com/',
        image: 'https://image.flaticon.com/icons/svg/145/145812.svg',
      },
      {
        url: 'https://www.linkedin.com/',
        image: 'https://image.flaticon.com/icons/svg/145/145807.svg',
      },
      {
        url: 'mailto:someone@example.com',
        image: 'https://image.flaticon.com/icons/svg/321/321817.svg',
      },
    ]}
  />
);

export default App;
````

## Other options

````
background={{
  image: {string} Background image of main container
  color: {string} Background color of main container,
  textColor: {string} Main text color for page
  overlay: {
    color: {string} Overlay color
    opacity: {string} Overlay opacity
  },
  style: {object} Additional style for main container
}}
logo={{
  src: {string} Image source
  alt: {string} Image alt text,
  style: {object} Additional style for logo
}}
title={{
  text: {string} Title text
  style: {object} Additional style for title
}}
description={{
  text: {string} description text
  style: {object} Additional style for description
}}
subscribe={{
  onSubmit: {function} Submit function for form, which receives input value 
  placeholder: {string} Placeholder text
  buttonText: {string} Button text
  inputStyle: {object} Additional style for input
  buttonStyle: {object} Additional style for button
}}
links: [
  {
    url: {string} Link url
    image: {string} Link image source
    text: {string} Link text
    imageStyle: {object} Additional style for image
    textStyle: {object} Additional style for text
  }
]
````

## Demo

To run demo on your own computer:

* Clone this repository
* `npm install`
* `npm start`
* Visit http://localhost:3000/
