import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import API_KEY from './components/keys';
import SearchBar from './components/search_bar';

//const API_KEY = API_KEY;
console.log(API_KEY);
// Create a new Component and this component should produce some html





class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboard'}, (videos) => {
            this.setState({ videos }); //ES6 syntax where key and value pair has same name. In our case its videos
            //this.setState({ videos: videos });
        });
    }

    render() {

        return (
        <div>
            <SearchBar />
        </div>
        );
    };
}

// Take this generated HTML and put it on the page.(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
