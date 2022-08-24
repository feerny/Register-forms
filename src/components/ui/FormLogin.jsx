import React from 'react';
import { BsEyeFill,BsEyeSlashFill } from "react-icons/bs";
import { Link } from 'react-router-dom';



function FormLogin(props) { 
    return (
        <div>
            <form onSubmit={props.submit} className="form">
                <h2>ingresa</h2>
                <input required id='email' onChange={props.onChange4} value={props.email} type="email" placeholder='Email' />
                <p id='valiEmail'></p>
                <div className='input-password'>
                    <input required  onChange={props.onChange} type={props.shown ? 'text' : 'password'}value={props.password}placeholder='password'  />
                    <button className='button-show' onClick={props.switchShown}>{props.shown? <BsEyeFill />:<BsEyeSlashFill />}</button>
               </div>

               <p id='validPassword'></p>
                <input id='buttonSend' value="login" disabled className='button-enviar' type="submit" /> 
                <p className='cuenta'>no tienes cuenta?</p><Link className='ul' to="/">registrate</Link> 
            </form>
        </div>
    );
}

export default FormLogin;