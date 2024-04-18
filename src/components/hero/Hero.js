import React from 'react';
import './Hero.css';
import { Carousel } from 'bootstrap';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';


const Hero = ({movies}) => {

    const navigate = useNavigate();

    return (
        <div className='movie-carousel-container'>
            <Carousel>
                {
                    movies.map((movie) => {
                        return(
                            <Paper>
                                <div className='movie-card-container'>
                                    <div className='movie-card'>
                                        <div className='movie-detail'>
                                            <div className='movie-poster'>
                                                <img src={movie.poster} alt=""/>
                                            </div>
                                            <div className='movie-title'>
                                                <h4>{movie.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero
