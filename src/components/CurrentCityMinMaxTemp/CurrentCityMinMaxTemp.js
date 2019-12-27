import React, { Component } from 'react';
import './CurrentCityMinMaxTemp.css';

class CurrentCityMinMaxTemp extends Component {
      state = {}
      render () {
            const minTemp = this.props.minTemp - 273.15;
            const maxTemp = this.props.maxTemp - 273.15;
            return (
                  <div className="currentCityMinMaxTemp"  >
                        <div className="arrow"><i className="fas fa-long-arrow-alt-down"></i></div>
                        <div className="temp">{minTemp.toFixed(0)}&deg;</div>
                        <div className="arrow"><i className="fas fa-long-arrow-alt-up"></i></div>
                        <div className="temp">{maxTemp.toFixed(0)}&deg;</div>
                  </div>);
      }
}

export default CurrentCityMinMaxTemp;