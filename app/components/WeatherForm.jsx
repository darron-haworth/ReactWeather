var React = require('react');

var WeatherForm = React.createClass({
    render: function () {
        return (
            <div>
            <form action="/" >
                <div><input type="text"></input></div>
                <input type="submit" value="Get Weather"></input>             
            </form>
            </div>
        );
    }
});

module.exports = WeatherForm;