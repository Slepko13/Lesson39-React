import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import WeekDay from '../WeekDay/WeekDay';

import './WeekForecast.css';
import DayHours from '../DayHours/DayHours';


class WeekForecast extends Component {
    state = {}
    getHours = (midi) => {
        let hoursTime = [];
        for (let i = 8; i < 22; i += 3) {
            let ggg = new Date(midi);
            // let nextDay = new Date(today);
            // nextDay.setDate(nextDay.getDate() + i);
            hoursTime.push(ggg.setHours(i, 0, 0, 0) / 1000);

        }
        return hoursTime;
    }
    getHoursForecast (dt) {
        let hours = this.getHours(dt);
        let hoursForecast = this.props.hoursForecast.filter(item => {

            if (hours.includes(item.dt))
                return item;
        })

        return hoursForecast;
    }

    render () {

        return (

            <BrowserRouter>
                <div className="weekForecast">
                    {this.props.forecast.map(day => {
                        let date = new Date(day.dt * 1000);

                        return (



                            <Route path="/week"><WeekDay
                                day={this.props.getWeekDay(date)}
                                temp={day.main.temp}
                                icon={day.weather[0].icon}
                                key={day.dt}
                                path={day.dt}
                            /></Route>


                        )
                    })}



                    {
                        this.props.forecast.map(day => {
                            let date = new Date(day.dt * 1000);
                            // console.log(day.dt);
                            console.log(this.getHoursForecast(day.dt * 1000));
                            return (

                                <Route path={`/${day.dt}`} ><DayHours
                                    day={this.props.getWeekDay(date)}
                                    weatherData={this.getHoursForecast(day.dt * 1000)} /></Route>

                            )
                        })
                    }
                    <Redirect from='/' to='/week' />
                </div>
            </BrowserRouter >
        );
    }
}

export default WeekForecast;