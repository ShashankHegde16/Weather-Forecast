import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';
import '../styles/style.css';


class WeatherList extends Component {
    renderForecast(cityData) {
        const name = cityData.city.name;
        const temperature = cityData.list.map(weather => weather.main.temp);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const { lat, lon } = cityData.city.coord;
        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon}></GoogleMap></td>
                <td> <Chart data={temperature} color='orange' units="K"></Chart> </td>
                <td><Chart data={pressure} color='green' units="hPa"></Chart></td>
                <td><Chart data={humidity} color='black' units="%"></Chart></td>
            </tr>
        )
    }
    render() {
        console.log(this.props)
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.forecast.map(this.renderForecast)}
                </tbody>

            </table>
        );
    }
}
const mapStatetoProps = ({ forecast }) => {
    return { forecast };
}

export default connect(mapStatetoProps)(WeatherList);