import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import WeekForecast from './components/WeekForecast/WeekForecast';
import ForecastTitle from './components/ForecastTitle/ForecastTitle';


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.forecast = { list: [] };
    this.state = {
      weather: {},
      fetching: true,
      forecastIsLoading: true,
      forecast: [],
      input: 'Ivano-Frankivsk'

    };
  }


  componentDidMount () {
    this.getWeather();
    this.getForecast();
    this.getCityWeather();
    // if (this.forecast.list.length > 0) {
    //   this.getFilteredForecast(this.forecast);
    // }



  }

  getWeekDay = (date) => {
    let weekdays = new Array(
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    );
    let day = date.getDay();
    return weekdays[day];
  }

  getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&appid=0eddcdb661df2306a90562e7f597877a`)
      .then(response => response.json())
      .then(weather => {
        this.setState({ weather });
        this.setState({ fetching: false });
        // console.log(this.state.weather);
      })
      .catch(error => console.log('Error:', error))
  }

  getForecast = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.input}&appid=0eddcdb661df2306a90562e7f597877a`)
      .then(response => response.json())
      .then(forecast => {
        this.forecast = forecast;
        let nextDays = [];
        for (let i = 1; i <= 5; i++) {
          let today = new Date();
          let nextDay = new Date(today);
          nextDay.setDate(nextDay.getDate() + i);
          nextDays.push(nextDay.setHours(14, 0, 0, 0) / 1000);

        }
        // console.log(nextDays);
        forecast = forecast.list.filter(item => {
          if (nextDays.includes(item.dt))
            return item;
        })
        console.log(this.forecast);
        this.setState({ forecast });
        this.setState({ forecastIsLoading: false });

      })
      .catch(error => console.log('Error:', error))
  }

  getFilteredForecast = (forecast) => {

    let nextDays = [];
    for (let i = 1; i <= 5; i++) {
      let today = new Date();
      let nextDay = new Date(today);
      nextDay.setDate(nextDay.getDate() + i);
      nextDays.push(nextDay.setHours(14, 0, 0, 0) / 1000);

    }
    console.log(nextDays);
    console.log(forecast);
    forecast = forecast.list.filter(item => {
      if (nextDays.includes(item.dt))
        return item;
    })
    console.log(forecast);
    this.setState({ forecast });
    this.setState({ forecastIsLoading: false });

  }

  getCityName = (event) => {
    this.setState({
      input: event.target.value
    })

  }
  getCityWeather = () => {
    this.setState({
      input: this.state.input,
      fetching: true,
      forecastIsLoading: true
    });
    this.getWeather();
    this.getForecast();
    // console.log(this.state.input);
  }

  render () {
    const { weather, fetching, forecast, forecastIsLoading, input } = this.state;
    return ((
      (fetching
        && forecastIsLoading
      ) ? (

          <section className="forecast"> <div className="loading">Loading...</div></section>) : (


          <section className="forecast">

            <ForecastTitle />
            <CurrentWeather
              {...weather}
              name={weather.name}
              minTemp={weather.main.temp_min}
              maxTemp={weather.main.temp_max}
              wind={weather.wind.speed}
              humidity={weather.main.humidity}
              iconDescription={weather.weather[0].description}
              iconImage={weather.weather[0].icon}
              currentTemp={weather.main.temp}
              day={weather.dt}
              getWeekDay={this.getWeekDay}
              input={input}
              getCityName={this.getCityName}
              getCityWeather={this.getCityWeather}
            />
            <WeekForecast forecast={forecast} getWeekDay={this.getWeekDay} hoursForecast={this.forecast.list} />

          </section>
        )));
  }
}

export default App;