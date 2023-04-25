import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Banner.css';
import instance from './axios';
import requests from './Requests';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await instance.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request;
            
        }
        fetchData();
    }, []);
    console.log(movie);

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }
    return (
        <header className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}
        >
            <div className='banner__contents'>
                <h1 className='banner__title'>{movie?.original_name}</h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My list</button>
                </div>
                <h1 className='banner__decsription'>{truncate(`${movie?.overview}`, 300)}   
                </h1>
            </div>
            <div className='banner--fadeBottom'></div>
        </header>
    );
}

export default Banner;