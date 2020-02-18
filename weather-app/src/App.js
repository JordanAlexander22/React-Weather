import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import Weather from "./components/weather-component";

// api key from weather api
// api call api.openweathermap.org/data/2.5/weather?q=London,uk
const APIkey = "84e898dfe4d7f1fd0174f5742982e7b8";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false
    };
    this.fetchWeather();
  }
// creating a function to convert weather to celsius

calCelsius(temp){
  let cel = Math.floor(temp-273.15)
  return cel;
}


  fetchWeather = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${APIkey}`
    );

    const response = await api_call.json(); //puts the response into json format making it easier to render later
    console.log(response);

    this.setState({
      city: response.name,
      country: response.sys.country,
      celsius: this.calCelsius(response.main.temp)
    });
  };
  render() {
    return (
      <div className="App">
        <Weather
          city={this.state.city}
          country={this.state.country}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}

        />
      </div>
    );
  }
}

export default App;
