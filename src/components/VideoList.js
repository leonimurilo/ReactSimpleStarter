/**
 * Created by Leoni on 7/23/2017.
 */
import React from "react";
import VideoListItem from "./VideoListItem";

// a map is a function of an array that receives a function X
// and calls this function X for each element in the array
// the function X must receive the element via argument
// and must return the result for its process regarding the element
// the map function will return an array that contains all the processed elements

const VideoList = (props) => {
    // Get the map() function return that contains an VideoListItem component for every video of props
    const videoItems = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video}/>
    });

    // use curly braces to use javaScript variables inside the JSX code
    // React will take the array videoItems and be smart enough to know that it has to render every single one
    // when passing an array to react. React gets that it's probably a list and asks for a unique key for
    // rendering optimization
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;