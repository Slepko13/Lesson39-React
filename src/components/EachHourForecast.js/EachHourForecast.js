import React, { Component } from 'react';
class EachHourForecast extends Component {
      state = {}
      getGoodHour = (dt) => {
            let goodHour = new Date(dt * 1000);
            goodHour = goodHour.getHours();
            return goodHour;
      }


      render () {

            let goodHour = this.getGoodHour(this.props.hour);
            return (
                  <div>
                        <div className="hourName">{this.props.day}</div>
                        <div className="hourValue">{`${goodHour - 2}-00`}</div>
                        <img src={`http://openweathermap.org/img/wn/${this.props.icon}.png`} alt="icon" />
                        <div className='hourDescription'>{this.props.desc}</div>

                        <div className="hourTemp">{this.props.temp}&deg;</div>
                  </div>


            );
      }
}

export default EachHourForecast;