import React, { Component } from 'react';
import './CityName.css';

class CityName extends Component {
      state = {}
      render () {
            return (

                  <div className="city-name">
                        <input className="input" onChange={this.props.getCityName} />
                        <button className="getWeatherButton" onClick={this.props.getCityWeather}>Get weather</button>
                        <div>{this.props.input}</div>
                  </div>);
      }
}

export default CityName;