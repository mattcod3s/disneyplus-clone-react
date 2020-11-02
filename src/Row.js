import React, { useState, useEffect } from 'react';
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './Row.scss';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchURL, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }
    /*
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch((error) => console.log(error));
        }
    }*/

    return (
        <div className="rows">
            <h2 className="row__title">{title === 'NETFLIX ORIGINALS' ? 'DISNEY ORIGINALS' : title}</h2>
            

            <div className="row__posters">
                {movies.map((movie) => (
                    <img
                    key={movie.id}
                    /*onClick={() => handleClick(movie)}*/
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${ isLargeRow ? movie.backdrop_path : movie.backdrop_path}`} alt={movie.name}/>
                ))
                }
            </div>
            {trailerUrl && < YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;