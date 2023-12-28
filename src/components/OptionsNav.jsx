import React, { useState } from 'react';
import '../css/Options.css';
import { GET_LIGHT_MODE, SET_LIGHT_MODE, SET_CLASS_LIGHT } from '../Globals/globals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoon} from '@fortawesome/free-solid-svg-icons';
import {faSun} from '@fortawesome/free-solid-svg-icons';

const OptionsNav = () => {
    
    const [isLightmode, setisLightmode] = useState(true);
    const [className, setclassName] = useState('light');

    const CHANGE_LIGHT_MODE = () =>
    {
        setisLightmode((isLightmode) => !GET_LIGHT_MODE());
        SET_LIGHT_MODE(isLightmode);
        isLightmode ? setclassName((className) => 'dark') : setclassName((className) => 'light');
        SET_CLASS_LIGHT(className);
    };
    
    return(
        <button className={`lightmode-btn-${className}`} onClick={CHANGE_LIGHT_MODE}><FontAwesomeIcon icon={isLightmode ? faSun : faMoon} /></button>
    );
};

export default OptionsNav