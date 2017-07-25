/**
 * Created by Leoni on 7/23/2017.
 */
import React from "react";

// using ES6 we can access directly a variable inside the argument instead of the entire argument
// In this case instead of getting props as the function parameters, we can get directly the video property inside props
const VideoListItem = ({video}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;