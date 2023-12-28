import React, { useState } from 'react';
import '../css/main.css';
import '../css/login.css';
import { URL } from '../Globals/globals';
import axios from "axios";
import Cookies from "universal-cookie";

const Login = () => {

    const [formState, setFormState] = useState({
        user: '',
        password: '',
        masterkey: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

    const SendRequest = async () =>
    {
        await axios.post(URL + 'user/login', formState).then(response => {
            const cookies = new Cookies();
            cookies.set("userToken", response.data.token, { path: '/' });
            alert(response.data.message);
        }).catch(error => {
            alert(error);
        })
    }

    const PreventSubmit = event => {
        event.preventDefault();
    }

    return(
        <div className='full-page d-flex align-items-center justify-content-center' style={{marginTop: '35px', paddingTop: '35px', }}>
            <div className='login-container container d-flex align-items-center justify-content-center'>
                <form onSubmit={PreventSubmit} className="row d-flex align-items-center justify-content-center form-rounded" style={{width: '100%', height: '100%', }}>
                    <div className='col-12 mb-4 d-flex align-items-center justify-content-center'>
                        <h2 className='fs-2 title-master-a'>Login</h2>
                    </div>
                    <div className='col-3'>
                        <p className='fs-6 text-master-a'>User: </p>
                        <p className='fs-6 text-master-a'>Password: </p>
                        <p className='fs-6 text-master-a'>Master Key: </p>
                    </div>
                    <div className='col-8'>
                        <input type="text" name="user" id="user" className='input_basic_master' value={formState.user} onChange={handleChange}/>
                        <input type="password" name="password" id="password" className='input_basic_master' value={formState.password} onChange={handleChange}/>
                        <input type="text" name="masterkey" id="masterkey" className='input_basic_master' value={formState.masterkey} onChange={handleChange}/>
                    </div>
                    <div className='col-7 mb-3 d-flex align-items-center justify-content-center'>
                        <input type="submit" value="Send" className='btn-master' onClick={SendRequest}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login