import React,{useEffect} from 'react';
import { BsEyeFill,BsEyeSlashFill } from "react-icons/bs";
import { Link } from 'react-router-dom';



function Form(props) { 
    
    // inicio de las validaciones con useEffect

     //validaciones username
     useEffect(() => {
        props.validUsername.indexOf('`')!== -1 || props.validUsername.indexOf('.')!== -1 || props.validUsername.indexOf('@')!== -1 || props.validUsername.indexOf('!')!== -1 || props.validUsername.indexOf('%')!== -1 || props.validUsername.indexOf('$')!== -1 || /\s/.test(props.validUsername)?
         document.getElementById('valiUsername').textContent='USUARIO INVALIDO: solo letras o numeros, sin espacios minimo 3 caracteres y maximo 20' : 
         document.getElementById('valiUsername').textContent='';
    }, [props.validUsername])

    //validaciones de email
    useEffect(() => {
        props.validemail.indexOf('.')=== -1 || props.validemail.indexOf('@')=== -1 || /\s/.test(props.validemail)?
         document.getElementById('valiEmail').textContent='Email invalido' : 
         document.getElementById('valiEmail').textContent='';
    }, [props.validemail])

    //validaciones password
    
    useEffect(() => {
        props.confpassword===props.password?  document.getElementById('buttonSend').removeAttribute('disabled'):document.getElementById('buttonSend').setAttribute('disabled','true')
    }, [props.confpassword,props.password])

    useEffect(() => {
        props.confpassword===props.password?
         document.getElementById('validPassword').textContent='' : 
         document.getElementById('validPassword').textContent='LA CONTRASEÑA NO COINCIDE';
    }, [props.confpassword,props.password])
    
    //fin de la validaciones con useEffects
    return (
        <div>
            
            <form onSubmit={props.submit} className="form">
                <h2>Registrate</h2>
                <input required id='username' onChange={props.onChange3} value={props.username} minLength="4" maxLength="8" type="text" placeholder='Username'/>
                <p id='valiUsername'></p>
                <input required id='email' onChange={props.onChange4} value={props.email} type="email" placeholder='Email' />
                <p id='valiEmail'></p>
                <div className='input-password'>
                    <input required  onChange={props.onChange} type={props.shown ? 'text' : 'password'}value={props.password}placeholder='password'  />
                    <button className='button-show' onClick={props.switchShown}>{props.shown? <BsEyeFill />:<BsEyeSlashFill />}</button>
               </div>
               <div >
                    <input required  onChange={props.onChange2} type='password'value={props.confpassword}placeholder='Confirm password'  />
               </div>
               <p id='validPassword'></p>
                <input id='buttonSend' value="register" disabled className='button-enviar' type="submit" /> 
                <p className='cuenta'>ya tienes cuenta?</p><Link className='ul' to="/login">ingresa</Link> 
            </form>
            
            
        </div>
    );
}

export default Form;