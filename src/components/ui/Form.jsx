import React from 'react';
import { BsEyeFill } from "react-icons/bs";



function Form(props) {
    return (
        <div>
            <form onSubmit={props.submit} className="form">
                <input required id='username' onChange={props.onChange3} value={props.username} minLength="4" maxLength="8" type="text" placeholder='Username'/>
                <p id='valiUsername'></p>
                <input required id='email' onChange={props.onChange4} value={props.email} type="email" placeholder='Email' />
                <p id='valiEmail'></p>
                <div className='input-password'>
                    <input required  onChange={props.onChange} type={props.shown ? 'text' : 'password'}value={props.password}placeholder='password'  />
                    <button className='button-show' onClick={props.switchShown}><BsEyeFill /></button>
               </div>
               <div className='input-password'>
                    <input required  onChange={props.onChange2} type={props.shown ? 'text' : 'password'}value={props.confpassword}placeholder='Confirm password'  />
                    <button className='button-show' onClick={props.switchShown}><BsEyeFill /></button> 
               </div>
               <p id='validPassword'></p>
                <input id='buttonSend' disabled className='button-enviar' type="submit" /> 

            </form>
        </div>
    );
}

export default Form;