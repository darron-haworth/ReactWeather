var React = require('react');
var WeatherMessage = require('WeatherMessage');

var WeatherForm = React.createClass({
    render: function () {
        return (
            <div>
                <div><input></input></div>
                <div><button>Get Weather</button></div>                
                <WeatherMessage />
            </div>
        );
    }
});

module.exports = WeatherForm;