import React from 'react';
import {Link, Route} from 'react-router-dom';


export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// returns a random 11-13 position number for use as a map key
export const uniqueKey = () => {
  return Math.floor(Math.random() * new Date().getTime());
};

export const imageHelper = (image, imageArray) => {
  const imgObj = imageArray.find(imgObj => imgObj.name === image);
  return (imgObj === undefined) ? noImage : imgObj.image === "" ? noImage : imgObj.image;
}