import React from 'react';
import '../css/main.css';
import perfil_img from '../img/perfil_img.png';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faFileLines} from '@fortawesome/free-solid-svg-icons';

const AboutMe = () =>
{
    return(
       <div className='web-AboutMe container text-center'>
            <div className='row d-flex justify-content-center'>
                <div className='col-4 d-flex align-items-center justify-content-center'>
                    <img src={perfil_img} alt="porfile image" className='web-imgporfile' />
                </div>
                <div className='col-8'>
                    <h1 className='fs-1 web-titleMe'>Scarlet Star✨💖</h1>
                    <p className='fs-6 web-AboutMeText'>
                        Desarrollador Fullstack, estudie desarrollo web desde hace 5 años con 2 proyectos donde participe activamente. Artista 2D en donde me enfocó en el diseño de personajes, animación, etc. Así como utilizar mis conocimientos para diseño UI/UX.
                    </p>
                    <p className='fs-6 web-AboutMeText'>
                        Artista Técnico y desarrollador de videojuegos, desarrollo videojuegos de forma independiente en Unity, me enfocó en el desarrollo en general, programación de Shaders, materiales, etc. Así mismo he hecho mis propios motores gráficos en OpenGL y DirectX.
                    </p>
                    <div className='web-iconsAboutMe' style={{ display: 'flex', flexWrap: 'nowrap' }}>
                        <Link to='https://twitter.com/Redmedina10' target="_blank" title="Twitter/X">
                            <div className='web-dot-AboutMe d-flex justify-content-center align-items-center'>
                                <FontAwesomeIcon icon={faTwitter} style={{color: "#fff",}} />
                            </div>
                        </Link>
                        <Link to='https://www.linkedin.com/in/ernesto-graciano-medina-8961951b1/' target="_blank" title="Linkedin">
                            <div className='web-dot-AboutMe d-flex justify-content-center align-items-center'>
                                <FontAwesomeIcon icon={faLinkedinIn} style={{color: "#fff",}} />
                            </div>
                        </Link>
                        <Link to='https://github.com/RedMedina' target="_blank" title="Github">
                            <div className='web-dot-AboutMe d-flex justify-content-center align-items-center'>
                                <FontAwesomeIcon icon={faGithub} style={{color: "#fff",}} />
                            </div>
                        </Link>
                        <Link to='https://twitter.com/Redmedina10' target="_blank" title="CV">
                            <div className='web-dot-AboutMe d-flex justify-content-center align-items-center'>
                                <FontAwesomeIcon icon={faFileLines} style={{color: "#fff",}} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default AboutMe