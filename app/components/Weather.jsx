var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
                

var Weather = React.createClass({
    getInitialState: function() {
        return {
            location: 'Sacramento',
            temp: 88
        }
    },
    handleSearch: function (location) {
        this.setState({
            location: location,
            temp: 99
        });
    },
    render: function () {
        var {temp, location} = this.state;
        return (
            <div>
                <h1>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                <WeatherMessage temp={temp} location={location} />
            </div>
        );
    }
});

module.exports = Weather;