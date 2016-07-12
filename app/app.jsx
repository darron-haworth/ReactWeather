
var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
    name: 'Darron',
    location: 'Rocklin'
};
var objTwo = {
    age:50,
    ...objOne
};



console.log(objTwo);

ReactDOM.render(
    <h1>Boilerplate app!</h1>,
    document.getElementById('app')
);