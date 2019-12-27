import React, { Component } from 'react';
import s from './DayHours.module.css';
import { NavLink } from 'react-router-dom';
import EachHourForecast from '../EachHourForecast.js/EachHourForecast';

class DayHours extends Component {
	state = {}
	render () {
		return (
			<NavLink to='/week/' className={s.wrapper}>
				<div className={s.title}>{this.props.day}</div>

				<div className={s.list}>
					{this.props.weatherData.map(hour => {
						return (
							<EachHourForecast
								temp={(hour.main.temp - 273.15).toFixed(0)}
								icon={hour.weather[0].icon}
								desc={hour.weather[0].description}
								key={hour.dt}
								hour={hour.dt}

							/>
						)
					})}
				</div>
			</NavLink>
		);
	}
}

export default DayHours;