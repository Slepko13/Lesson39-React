import React, { Component } from 'react';
import './CurrentWeatherIcon.css';

class CurrentWeatherIcon extends Component {
      state = {}
      render () {

            return (
                  <div className="weather-icon">

                        <img src={`http://openweathermap.org/img/wn/${this.props.iconImage}.png`} alt="icon" />

                        <div className="weather-description">{this.props.iconDescription}</div>
                  </div>
            );
      }
}

export default CurrentWeatherIcon;