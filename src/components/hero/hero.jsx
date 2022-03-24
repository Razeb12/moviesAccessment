import React from 'react';

import './hero.scss';

import bg from '../../assets/hero.png';

const Hero = props => {
    return (
        <div
        className={`hero-slide__item`}
        style={{backgroundImage: `url(${bg})`}}
    >
           
           <div className="hero-slide__item__content container">
                <div className="hero-slide__item__content__info">
                    <h2 className="title">Watch<br/> Something <br/>Amazing</h2>
                   
                    
                </div>
                
            </div>
        </div>
    );
}


export default Hero;
