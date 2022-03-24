import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router';

// import HeroSlide from '../components/hero-slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';
import Hero from '../components/hero/hero'
import { category, movieType, } from '../api/tmdbApi';
import Input from '../components/input/Input';
import '../components/movie-grid/movie-grid.scss';


const Home = props => {

   

    const { keyword } = useParams();

   
    return (
        <>
           <Hero/>
        
            <div className="container">
                <div className="section mb-3">
                <div className="section mb-3">
                <MovieSearch category={props.category} keyword={keyword}/>
            </div>
            
            
                    <div className="section__header mb-2">
                        <h1>Trending Movies</h1>
                        
                    </div>
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h1>Top Rated Movies</h1>
                        
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated}/>
                </div>
                

            </div>
        </>
    );
}

const MovieSearch = props => {

    const history = useHistory();

    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

    const goToSearch = useCallback(
        () => {
            if (keyword.trim().length > 0) {
                history.push(`movie${[props.category]}/search/${keyword}`);
            }
        },
        [keyword, props.category, history]
    );

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                goToSearch();
            }
        }
        document.addEventListener('keyup', enterEvent);
        return () => {
            document.removeEventListener('keyup', enterEvent);
        };
    }, [keyword, goToSearch]);

    return (
        <div className="movie-search">
            <h5 className='searchTitle'>Search</h5>
            <Input
                type="text"
               
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
         
        </div>
    )
}

export default Home;