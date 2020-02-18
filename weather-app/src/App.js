import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Weather from './components/weather-component';

// api key from weather api
// api call api.openweathermap.org/data/2.5/weather?q=London,uk
const APIkey= "84e898dfe4d7f1fd0174f5742982e7b8"


class App extends React.Component {
  constructor(){
    super();
    this.state= {
      city: undefined,
      country: undefined
    };
    this.fetchWeather();
  }

  fetchWeather= async () => {
    const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${APIkey}`);
    
    const response = await api_call.json(); //puts the response into json format making it easier to render later
    console.log(response);

    this.setState({
      city:response.name,
      country:response.sys.country
    })
  }
  render(){
    return (
      <div className="App">
      <Weather city={this.state.city} country={this.state.country}/>
    </div>
    );
  }
}


export default App;
