import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAtWzEkZ0CNh8hqiWe5Ft87vgP5gD75jUQ';

//downwards data flow, most parent component responsible for fetching data
YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

const App = () => {
  return (<div>
            <SearchBar/>
          </div>
  );
}


ReactDOM.render(
    <App />
  , document.querySelector('.container'));
