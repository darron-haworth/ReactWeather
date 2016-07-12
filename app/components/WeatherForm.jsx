var React = require('react');
var WeatherMessage = require('WeatherMessage');

var WeatherForm = React.createClass({
    render: function () {
        return (
            <div>
            <form>
                <div><input type="text"></input></div>
                <div><button>Get Weather</button></div>                
                <WeatherMessage />
            </form>
            </div>
        );
    }
});

module.exports = WeatherForm;