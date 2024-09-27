// CustomButton.js
"use client";
// CustomButton.js
import React from 'react';
const legendaryChest = () => {
 const handleClick = () => {
   alert('Image was clicked!');
 };
 return (
   <img src="./assets/legendaryChest.jpg" onClick={handleClick} style={buttonStyle} />
 );
};
const buttonStyle = {
};
export default legendaryChest;