import React, { Component } from 'react';
import './CurrentCityTemp.css';

class CurrentCityTemp extends Component {
      state = {}
      render () {
            const currentTemp = this.props.currentTemp - 273.15;
            return (
                  <div className="weather-temp">{currentTemp.toFixed(0)}&deg;</div>
            );
      }
}

export default CurrentCityTemp;