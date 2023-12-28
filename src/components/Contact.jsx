import React from 'react';
import '../css/contact.css';

const Contact = () =>
{
    return(
        <div className='container mb-4'>
            <h2 className='fs-2 web-title-sections mb-4'>Contacto</h2>
            
            <form action="">
                <input type="text" name="" id="" placeholder='Name' className='input-contact-web mb-3' /><br />
                <input type="text" name="" id="" placeholder='Subject' className='input-contact-web mb-3' /><br />
                <input type="text" name="" id="" placeholder='Email' className='input-contact-web mb-3' /><br />
                <textarea name="" id="" placeholder='Message' className='area-contact-web mb-4'></textarea>
                <input type="submit" value="Enviar" className='btn-contact-web'/>
            </form>
        </div>
    );
};

export default Contact