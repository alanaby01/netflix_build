import React from 'react';
import './Banner.css';

function Banner(props) {
    return (
        <div className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url('https://pixy.org/src/49/thumbs350/491517.jpg')`
            }}
        >
        <div className='banner__contents'>
            <div className='banner__title'>Movie Name</div>
            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My list</button>
            </div>
            <h1 className='banner_decsription'>This is a test description</h1>
        </div>
        <div className='banner--fadeBottom'></div>

            
        </div>
    );
}

export default Banner;