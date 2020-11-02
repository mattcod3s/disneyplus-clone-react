import React from 'react';
import Row from './Row';
import requests from './requests';
import './main.scss';
import Banner from './Banner';
import Categories from './Categories';


function App() {
  return (
    <div className="App">
      <Banner />
      <Categories />
      <div className="app__rows">
        < Row title="NETFLIX ORIGINALS" isLargeRow fetchURL={requests.fetchNetflixOriginals}/>
        < Row title="Trending Now" fetchURL={requests.fetchTrending}/>
        < Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
        < Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
        < Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
        < Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
        < Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
        < Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
      </div>
    </div>
  );
}

export default App;
