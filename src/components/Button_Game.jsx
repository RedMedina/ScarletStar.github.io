import React from 'react';
import '../css/Options.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGamepad} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const Button_Game = () => {
    return(
        <Link to='/'><button className={`game-btn-dark`}><FontAwesomeIcon icon={faGamepad} /></button></Link>
    );
};

export default Button_Game