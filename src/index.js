import React, {Component} from "react"; // core react library that knows how to work with components
import YTSearch from "youtube-api-search";
import ReactDOM from "react-dom"; // separated lib that is responsible to insert the component into the DOM

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

import apiKey from "../apiKey";

const API_KEY = apiKey.youtube.API_KEY;


// create a new class of a component (not an instance) that should produce some html
class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null // passed into VideoDetail
        };

        this.videoSearch("guns n roses");

    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, videos => {
            console.log(term);
            console.log(videos);
            this.setState(
                {
                    videos: videos,
                    selectedVideo: videos[0]
                }
            );
        });
    }

    // we can pass data from the parent component (app) to the child just by
    // defining a property on the jsx tag
    // passing data like this is referred to as passing the props of a component
    // in a functional component, props comes as an argument
    // in a class based component, props can be accessible from anywhere as this.props

    // to update the selected video, we'll pass a callback function from this App component into the videoList
    // and then from videoList we'll pass the callback into the videoListItem
    // the videoListItem component will use this callback to update the selected video (in state of this component)
    // the callback will "arrive" as a property of props object
    // passing callbacks is a great way to do small communication between a parent and its child components
    // when the thing gets bigger it is better to think about another approach

    render(){
        return (
            <div>
                <SearchBar
                    onSearchTermChange={term => this.videoSearch(term)}
                />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => {this.setState({selectedVideo})}}
                    videos={this.state.videos}
                />
            </div>
        );
    }

}

// take the component and put it on the page (in the DOM)
// note that the jsx tag with the component name makes an instance of the class "App" na pass it as the first argument
// the second argument is a reference to an existing DOM node on the page
ReactDOM.render(<App />, document.querySelector(".container"));
