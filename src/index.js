import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';



//downwards data flow, most parent component responsible for fetching data


class App extends Component {
    constructor(props) {
        const API_KEY = 'AIzaSyAtWzEkZ0CNh8hqiWe5Ft87vgP5gD75jUQ';
        super(props);
        this.state = { videos:[] };
        YTSearch({key: API_KEY, term: 'snowboard khelmo'}, (videos) => {
            //console.log(data);
            //this.state = { videos: data };
            //this.state = { videos: videos };
            //es6 syntax, key eh o mesmo nome do valor
            this.setState({ videos });

        });

    }
    render()
    {
        return (<div>
                    <SearchBar />
                    <VideoDetail video={this.state.videos[0]} />
                    <VideoList videos={this.state.videos} />
                </div>
        );
    }
}


ReactDOM.render(
    <App />
  , document.querySelector('.container'));
