var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'andi'
};

var objTwo = {
  location: 'bali',
  ...objOne
}

console.log(objTwo);

ReactDOM.render(
  <h1>Boilerplate app!</h1>,
  document.getElementById('app')
);
