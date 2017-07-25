/**
 * Created by Leoni on 7/23/2017.
 */
import React from "react";


// functional component because it has no internal state
// it will only show information provided by the app component
const VideoDetail = ({video}) => {
    // some parent objects just can't fetch information fast enough to satisfy the needs of a child object
    // when this component tries to render, the video property will still be undefined because of the
    // youtube response.
    // To handle this case we'll add a check inside this component to make sure that video has been provided
    if(!video)
        return (
          <div>Loading... </div>
        );

    // const url = "https://www.youtube.com/embed/" +  video.id.videoId;
    // using ES interpolation
    const url = `https://www.youtube.com/embed/${video.id.videoId}`;


    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} ></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;