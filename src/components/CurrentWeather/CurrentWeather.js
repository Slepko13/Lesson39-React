import React, { Component } from 'react';
import CityName from '../CityName/CityName';
import CurrentCityMinMaxTemp from '../CurrentCityMinMaxTemp/CurrentCityMinMaxTemp';
import CurrentCityInfo from '../CurrentCityInfo/CurrentCityInfo';
import CurrentWeatherIcon from '../CurrentWeatherIcon/CurrentWeatherIcon';
import CurrentCityTemp from '../CurrentCityTemp/CurrentCityTemp';
import './CurrentWeather.css';

class CurrentWeather extends Component {
    state = {}
    render () {
        const {
            name,
            minTemp,
            maxTemp,
            wind,
            humidity,
            iconDescription,
            iconImage,
            currentTemp,
            getWeekDay,
            day,
            input,
            getCityName,
            getCityWeather
        } = this.props;

        return (
            <div className="day-forecast">
                <div className="row">

                    <CityName
                        name={name}
                        input={input}
                        getCityName={getCityName}
                        getCityWeather={getCityWeather} />
                    <CurrentCityMinMaxTemp
                        minTemp={minTemp}
                        maxTemp={maxTemp}
                    />
                </div>
                <div className="row">
                    <CurrentCityInfo
                        day={day}
                        wind={wind}
                        humidity={humidity}
                        getWeekDay={getWeekDay}
                    />
                    <CurrentWeatherIcon
                        iconDescription={iconDescription}
                        iconImage={iconImage}
                    />
                    <CurrentCityTemp
                        currentTemp={currentTemp}
                    />
                </div>

            </div>);
    }
}

export default CurrentWeather;