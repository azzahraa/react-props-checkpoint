import React, { Component } from 'react';
//import './Profile.css';
import PropTypes from "prop-types";
//import React from 'react';
import ReactDOM from 'react-dom';
const Profile = (props)=> {
  return (
  <div className='App'>
  <div style={{width:'500px',marginLeft:'30%',marginTop:'25px' }}>
  <div style={{backgroundColor:'skyblue'}}>
    <h1>Profile</h1>
</div>
  
<h3>{props.fullName}</h3>
<h3>{props.bio}</h3>
<p>{props.profession}</p>
<div className='App' style={props.style}>
        <img src='./myImage.jpg' alt='photo'/>
        {props.children}
        </div>
        </div>
        
        </div>
)};
Profile.propsTypes ={
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession:PropTypes.string,
  style:PropTypes.object
  }
  
  
  Profile.defaultProps={
      fullName:'Mr Hyde',
      bio : 'created a secret potion that he uses on himself',
      profession : 'chemist by day, monster by night'
  }
export default Profile;