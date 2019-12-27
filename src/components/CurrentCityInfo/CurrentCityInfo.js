import React, { Component } from 'react';
import './CurrentCityInfo.css';

class CurrentCityInfo extends Component {
      state = {}
      render () {
            let day = new Date(this.props.day * 1000);
            let year = day.getFullYear();
            let month = day.getMonth() + 1;
            let currentDay = day.getDate();
            return (
                  <div className="info">

                        <div className="day-name">{this.props.getWeekDay(day)}</div>
                        <div className="date">{currentDay}/{month}/{year}</div>
                        <div className="wind">wind {+this.props.wind.toFixed(0)} km/h</div>
                        <div className="humidity">
                              <div className="humidity-icon"><i className="fas fa-tint"></i></div>
                              <div className="humidity-value">{this.props.humidity}&#37;</div>
                        </div>
                  </div>
            );
      }
}

export default CurrentCityInfo;