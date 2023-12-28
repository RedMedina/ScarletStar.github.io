import React, { useState, useEffect } from 'react';
import '../css/Options.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import { GET_CLASS_LIGHT } from '../Globals/globals';
import {Link} from 'react-router-dom';

const Button_Web = () => {

    const [isLightmode, setisLightmode] = useState('light');
    useEffect(() => {
        setisLightmode((isLightmode) => GET_CLASS_LIGHT());
        console.log(isLightmode);
      });

    return(
        <Link to='/web'><button className={`web-btn-${isLightmode}`}><FontAwesomeIcon icon={faGlobe} /></button></Link>
    );
};

export default Button_Web