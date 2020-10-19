import React, { Component } from 'react';


const Form = props => (<div className ="form-control" >

<form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City..."/>
    <input type="text" name="country" placeholder="Country..."/>
    <button className="form-button">Get Weather</button>
  </form>
</div>
  
);

export default Form;
