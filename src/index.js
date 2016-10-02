import React from 'react';
import ReactDOM from 'react-dom';
import API_KEY from './components/keys';
import SearchBar from './components/search_bar';

//const API_KEY = API_KEY;
console.log(API_KEY);
// Create a new Component and this component should produce some html


const App = () => {
    return ( <div>
        <SearchBar />
    </div>
    );
}

// Take this generated HTML and put it on the page.(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
