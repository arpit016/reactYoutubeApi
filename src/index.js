import React from 'react';
import ReactDOM from 'react-dom';
// Create a new Component and this component should produce some html

const App = () => <div>Hi!</div>;

// Take this generated HTML and put it on the page.(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
