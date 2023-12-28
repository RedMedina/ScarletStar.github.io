import React from 'react';
import OptionsNav from '../components/OptionsNav';
import '../css/Options.css';
import Button_Web from '../components/Button_Web';

const index = () => {
    return(
        <div className='btn-panel-nav'>
            <Button_Web></Button_Web>
            <OptionsNav></OptionsNav>
        </div>
    );
};

export default index