import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import API_KEY from './components/keys';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//const API_KEY = API_KEY;
console.log(API_KEY);
// Create a new Component and this component should produce some html





class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch("Bassotronics I Love You")
    }
    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            }); //ES6 syntax where key and value pair has same name. In our case its videos
            //this.setState({ videos: videos });
        });
    }

    render() {
        //const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
        <div>
            <SearchBar
          //      onSearchTermChange={videoSearch}
                onSearchTermChange={term => this.videoSearch(term)}             // onSearchTermChange = function(term){
                                                                                // this.videoSearch(term) }
            />
            <VideoDetail video = {this.state.selectedVideo} />
            <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})} // onVideoSelect = {function(selectedVideo) {
                                                                                // this.setState({selectedVideo: selectedVideo})
                                                                                // }}
                videos={this.state.videos}/>
        </div>
        );
    };
}

// Take this generated HTML and put it on the page.(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
