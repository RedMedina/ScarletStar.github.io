import React from 'react';
import '../css/eduexp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode} from '@fortawesome/free-solid-svg-icons';

const Experience = () => 
{
    return(
        <div className='container text-center mb-4'>
            
            <h2 className='fs-2 web-title-sections mb-2'>Experiencia</h2>

            <section className="py-3 timeline-web" style={{width: '98%', float: 'right', }}>
                <ul className="timeline-with-icons">
                    <li className="timeline-item mb-5">
                        <span className="timeline-icon">
                            <FontAwesomeIcon icon={faCode} style={{color: "#ff6d6d",}} />
                        </span>

                        <h5 className="fs-5 title-ed-web">Servicio social</h5>
                        <p className="fs-6 time-ed-web">2023</p>
                        <p className="fs-6 desc-ed-web">
                            Participación activa en la mejora y revisión de dos páginas web en
                            laravel enfocadas a los estudiantes de la FCFM de la UANL. Páginas
                            relacionadas con la carrera de LMAD. Implementé mejoras a ambas
                            páginas así como revisión de errores y testing.
                        </p>
                    </li>

                    <li className="timeline-item mb-5">

                    <span className="timeline-icon">
                        <FontAwesomeIcon icon={faCode} style={{color: "#ff6d6d",}} />
                    </span>
                    <h5 className="fs-5 title-ed-web">Practicante Desarrollador Web</h5>
                    <p className="fs-6 time-ed-web">2018</p>
                    <p className="fs-6 desc-ed-web">
                        Programador Jr en el desarrollo del sistema web en Java para diversos
                        tipos empresas, así como desarrollador de una aplicación para Android
                        relacionada con los sistemas anteriores.
                    </p>
                    </li>

                </ul>
            </section>
        </div>
    );
};

export default Experience