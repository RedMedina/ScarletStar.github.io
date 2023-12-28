import React from 'react';
import '../css/proyects.css';
import scarletadv from '../img/scarlet_adv.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHtml5} from '@fortawesome/free-brands-svg-icons';
import {faSquareJs} from '@fortawesome/free-brands-svg-icons';
import {faPhp} from '@fortawesome/free-brands-svg-icons';
import {faCss3Alt} from '@fortawesome/free-brands-svg-icons';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

import css from '../img/css.png';
import html from '../img/html.png';
import js from '../img/js.webp';
import php from '../img/php.png';

import {Link} from 'react-router-dom';

const Proyects = () => 
{
    return(
        <div className='container text-center' style={{marginBottom: '120px', }}>
            <h2 className='fs-2 web-title-sections' style={{marginBottom: '2.2rem', }}>Proyectos</h2>

            <div className="card mb-5 d-flex align-items-center justify-content-center">
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <img src={scarletadv} alt="proyect image" className='web-img-proyect' />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="fs-4 card-title">Scarlet Adventure</h5>
                            <p className="card-text">Videojuego en Web desarrollado con Three JS, JRPG libre para explorar 3 
                            diversos mapas con distintos enemigos, en donde podrás atacarlos, esquivar sus movimientos y 
                            derrotarlos para ganar experiencia y subir de nivel, podrás apoyarte de diversos objetos que te 
                            ayudarán en tu aventura y guardar los datos de la misma sin perder tu avance.</p>
                            <p className="card-text">
                                <img src={html} alt="html icon" className='web-img-icon' />
                                <img src={css} alt="css icon" className='web-img-icon' />
                                <img src={js} alt="js icon" className='web-img-icon' />
                                <img src={php} alt="php icon" className='web-img-icon' />


                                <Link to='https://www.youtube.com/watch?v=vkC3lWqmP7M&ab_channel=CinderaceTareas' target="_blank" title='Online proyect'>
                                    <FontAwesomeIcon icon={faLink} style={{color: "#ff6d6d", float: 'right', width: '23px', height: '23px', }} className='web-icon-link' />
                                </Link>
                                <Link to='https://www.youtube.com/watch?v=vkC3lWqmP7M&ab_channel=CinderaceTareas' target="_blank" title='Youtube trailer'>
                                    <FontAwesomeIcon icon={faYoutube} style={{color: "#ff6d6d", float: 'right', width: '23px', height: '23px', }} className='web-icon-yt'/>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-5 d-flex align-items-center justify-content-center">
                <div className="row g-0 ">
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <img src={scarletadv} alt="proyect image" className='web-img-proyect' />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="fs-4 card-title">Scarlet Adventure</h5>
                            <p className="card-text">Videojuego en Web desarrollado con Three JS, JRPG libre para explorar 3 
                            diversos mapas con distintos enemigos, en donde podrás atacarlos, esquivar sus movimientos y 
                            derrotarlos para ganar experiencia y subir de nivel, podrás apoyarte de diversos objetos que te 
                            ayudarán en tu aventura y guardar los datos de la misma sin perder tu avance.</p>
                            <p className="card-text">
                                <img src={html} alt="html icon" className='web-img-icon' />
                                <img src={css} alt="css icon" className='web-img-icon' />
                                <img src={js} alt="js icon" className='web-img-icon' />
                                <img src={php} alt="php icon" className='web-img-icon' />

                                <Link to='https://www.youtube.com/watch?v=vkC3lWqmP7M&ab_channel=CinderaceTareas' target="_blank" title='Online proyect'>
                                    <FontAwesomeIcon icon={faLink} style={{color: "#ff6d6d", float: 'right', width: '23px', height: '23px', }} className='web-icon-link'/>
                                </Link>
                                <Link to='https://www.youtube.com/watch?v=vkC3lWqmP7M&ab_channel=CinderaceTareas' target="_blank" title='Youtube trailer'>
                                    <FontAwesomeIcon icon={faYoutube} style={{color: "#ff6d6d", float: 'right', width: '23px', height: '23px', }} className='web-icon-yt'/>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section-btns d-flex align-items-center justify-content-center' style={{ display: 'flex', flexWrap: 'nowrap' }}>
                <button className='web-btn-proj'>
                    <FontAwesomeIcon icon={faArrowLeft} style={{color: "#ffffff",}} />
                </button>
                <p className='num-page my-auto'>0</p>
                <button className='web-btn-proj'>
                    <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff",}} />
                </button>
            </div>

        </div>
    );
};

export default Proyects