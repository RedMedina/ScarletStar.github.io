import React from 'react';
//import OptionsNav from '../components/OptionsNav';
import '../css/main.css';
import '../css/Options.css';
//import Button_Game from '../components/Button_Game';
import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Proyects from '../components/Proyects';
import Contact from '../components/Contact';
import Line_hr from '../components/Line_hr';

const web = () => {
    return(
        <div className='full-page d-flex align-items-center justify-content-center'>
            {/*<div className='btn-panel-nav'>
                <Button_Game></Button_Game>
                <OptionsNav></OptionsNav>
            </div>*/}
            <div className='web-body mb-4'>
                <AboutMe></AboutMe>
                <Education></Education>
                <Line_hr></Line_hr>
                <Experience></Experience>
                <Proyects></Proyects>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default web