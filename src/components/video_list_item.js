import React from 'react';

/*es6 syntax igual abaixo
const VideoListItem = (props) => {
    const video = props.video;
  */
const VideoListItem = ({video}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item">
<div className="video-list-media">
    <div className="media-left">
        <img className="media-object" src={imageUrl} />

    </div>
    <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
    </div>
</div>
        </li>
    );
}

export default VideoListItem;