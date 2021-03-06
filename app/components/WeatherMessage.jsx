var React = require('react');

var WeatherMessage = React.createClass({
    render: function () {
        var {temp, location} = this.props;
        return (
            <h4>It is {temp}&#8457; in {location}!</h4>
        );
    }
});

module.exports = WeatherMessage;