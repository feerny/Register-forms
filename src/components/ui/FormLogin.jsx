import React from 'react';
import { BsEyeFill,BsEyeSlashFill } from "react-icons/bs";
import { Link } from 'react-router-dom';



function FormLogin(props) { 
    return (
        <div>
            <form onSubmit={props.submitLogin} className="formLogin">
                <h2>ingresa</h2>
                <input required id='username' onChange={props.onChangeUser} value={props.user} minLength="3" maxLength="20" type="text" placeholder='Username'/>
                <p id='valiUsername'></p>
                <div className='input-password'>
                    <input required  onChange={props.onChangePassword} type={props.shown ? 'text' : 'password'}value={props.passworduser}placeholder='password'  />
                    <button className='button-show' onClick={props.switchShown}>{props.shown? <BsEyeFill />:<BsEyeSlashFill />}</button>
               </div>

               <p id='validPassword'></p>
                <input id='buttonSend' value="login"  className='button-enviar' type="submit" /> 
                <p className='cuenta'>no tienes cuenta?</p><Link className='ul' to="/register">registrate</Link> 
            </form>
        </div>
    );
}

export default FormLogin;