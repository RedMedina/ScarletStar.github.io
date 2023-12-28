import React from 'react';
import '../css/eduexp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBuildingColumns} from '@fortawesome/free-solid-svg-icons';
import {faSchool} from '@fortawesome/free-solid-svg-icons';

const Education = () => 
{
    return(
        <div className='container text-center'>
            
            <h2 className='fs-2 web-title-sections mb-2'>Estudios</h2>

            <section className="py-3 timeline-web" style={{width: '98%', float: 'right', }}>
                <ul className="timeline-with-icons">
                    <li className="timeline-item mb-5">
                        <span className="timeline-icon">
                            <FontAwesomeIcon icon={faBuildingColumns} style={{color: "#ff6d6d",}} />
                        </span>

                        <h5 className="fs-5 title-ed-web">Lic. Multimedia y Animación Digital</h5>
                        <p className="fs-6 time-ed-web">2019 - 2023</p>
                        <p className="fs-6 desc-ed-web">
                            Estudios realizados en la FCFM de la Universidad Autónoma de Nuevo
                            León, enfocados al desarrollo web con PHP, React, Node JS, Java, SQL, uso
                            de bases de datos no relacionales como Firebase y MongoDB, desarrollo
                            de aplicaciones de escritorio con SQL Server, C# y C++. Aprendizaje en la
                            creación de un motor de videojuegos desde cero usando OpenGL y
                            DirectX, así como shaders en HSLS y GLSL. Y desarrollo de videojuegos en
                            Unity y Unreal Engine. Arte 2D diseño de personajes, storyboard y
                            animación en Photoshop, After Effects y Animate, Arte 3D con Maya.
                        </p>
                    </li>

                    <li className="timeline-item mb-5">

                    <span className="timeline-icon">
                        <FontAwesomeIcon icon={faSchool} style={{color: "#ff6d6d",}} />
                    </span>
                    <h5 className="fs-5 title-ed-web">Técnico TIC en programación Web</h5>
                    <p className="fs-6 time-ed-web">2016 - 2019</p>
                    <p className="fs-6 desc-ed-web">
                        Estudios realizados en la Preparatoria Técnica Ávaro Obregón, los cuales
                        se enfocaron en desarrollo web de páginas en PHP, así como el uso de
                        Visual Studio para aplicaciones de escritorio. Uso de aplicaciones de
                        Office como Word, Excel con scripts y Power Point.
                    </p>
                    </li>

                </ul>
            </section>
        </div>
    );
};

export default Education