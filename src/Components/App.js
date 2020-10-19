import React, { Component } from 'react';
import Titles from './Titles';
import Form from './Form';
import Weather from './Weather';
import '../style.css';

var sectionStyle = {
    height: "100vh",
    backgroundImage: "url(https://wallpapercave.com/wp/wp3568180.jpg)",
    backgroundRepeat:' no-repeat, repeat',
    backgroundSize: 'cover'
  }
  

//api key
const API_KEY = "92908091e7f1e83fec0d3e3d5474e66a";
// This is the major component which will contain all other tiny components
class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city && country){
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }
    else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter values"
      });
    }
  }

  render() {
   
    return (
      <div className="App"  >
        <div className="wrapper" style={ sectionStyle }>
          <div className="main"  >

            <div className="container"   >
              <div className="row">
                <div className="col-xs-5 title-container">
                   <Titles />
                </div>
                <div className="col-xs-7 form-container">

                <Form getWeather={this.getWeather} />

                <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}/>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  }
}


export default App;
