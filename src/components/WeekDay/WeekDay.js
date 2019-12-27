import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './WeekDay.css';

class WeekDay extends Component {
  state = {}
  getConsole = () => {
    console.log(this.props.day);
  }
  render () {
    let { day, icon, temp, path } = this.props;

    return (
      <NavLink to={`/${path}`} className="day">
        <div className="week-day">{day.substring(0, 3)}</div>
        <div className="week-icon">
          <img onClick={this.getConsole} src={`http://openweathermap.org/img/wn/${icon}.png`} alt="icon" />
        </div>

        <div className="week-temp">{(temp - 273.15).toFixed(0)}&deg;</div>
      </NavLink>

    );
  }
}

export default WeekDay;
