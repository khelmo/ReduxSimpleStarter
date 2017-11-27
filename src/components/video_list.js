import React from 'react';
import VideoListItem from './video_list_item';

//class component this.props pode ser chamado de qlqr lugar na classe, se for functional component tem q por props como parametro
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
       return <VideoListItem key={video.etag}  video={video} onVideoSelect={props.onVideoSelect} />
    });

	return (
		<ul className="col-md-4 list-group">
            {videoItems}

		</ul>
	);
}

export default VideoList;