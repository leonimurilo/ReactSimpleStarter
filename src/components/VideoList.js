/**
 * Created by Leoni on 7/23/2017.
 */
import React from "React";

const VideoList = (props) => {
    const videos = props.videos;
    return (
        <ul className="col-md-4 list-group">
            {props.videos.length}
        </ul>
    );
};

export default VideoList;