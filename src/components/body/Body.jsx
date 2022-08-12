import React,{useState,useEffect} from 'react';
import Form from '../ui/Form'





function Body() {

    //inicio de constantes
    const [username, setusername] = useState('');
    const [validUsername, setvalidUsername] = useState('');
    const [email, setemail] = useState('');
    const [validemail, setvalidemail] = useState('.@');

    const [password, setPassword] = useState('');
    const [confpassword, setconfpassword] = useState('');
    const onChange = ({ currentTarget }) => setPassword(currentTarget.value);
    const onChange2 = ({ currentTarget }) => setconfpassword(currentTarget.value);
    const onChange3 = ({ currentTarget }) => setusername(currentTarget.value);
    const onChange4 = ({ currentTarget }) => setemail(currentTarget.value);
    const [shown, setShown] = useState(false);
    const switchShown = (event) => {setShown(!shown)
        event.preventDefault()};
    //fin de constantes




    // inicio de las validaciones con useEffect

    //validaciones username
    useEffect(() => {
        validUsername.indexOf('`')!== -1 || validUsername.indexOf('.')!== -1 || validUsername.indexOf('@')!== -1 || validUsername.indexOf('!')!== -1 || validUsername.indexOf('%')!== -1 || validUsername.indexOf('$')!== -1 || /\s/.test(validUsername)?
         document.getElementById('valiUsername').textContent='USUARIO INVALIDO: solo letras o numeros, sin espacios minimo 3 caracteres y maximo 20' : 
         document.getElementById('valiUsername').textContent='';
    }, [validUsername])

    //validaciones de email
    useEffect(() => {
        validemail.indexOf('.')=== -1 || validemail.indexOf('@')=== -1 || /\s/.test(validemail)?
         document.getElementById('valiEmail').textContent='Email invalido' : 
         document.getElementById('valiEmail').textContent='';
    }, [validemail])

    //validaciones password
    
    useEffect(() => {
        confpassword===password?  document.getElementById('buttonSend').removeAttribute('disabled'):document.getElementById('buttonSend').setAttribute('disabled','true')
    }, [confpassword,password])

    useEffect(() => {
        confpassword===password?
         document.getElementById('validPassword').textContent='' : 
         document.getElementById('validPassword').textContent='LA CONTRASEÑA NO COINCIDE';
    }, [confpassword,password])
    
    //fin de la validaciones con useEffects

    //evento que se ejecuta al enviar el formulario
    const submit=(event)=>{
        if ((username.indexOf('`')!== -1 || username.indexOf('.')!== -1 || username.indexOf('@')!== -1 || username.indexOf('!')!== -1 || username.indexOf('%')!== -1 || username.indexOf('$')!== -1 || /\s/.test(username)) || (email.indexOf('.')=== -1 || email.indexOf('@')=== -1 || /\s/.test(email))) {
            console.log("error");
        }else{
            alert(`registro exitoso ${username}`);
            XMLHttpRequestUpload()

        }
        event.preventDefault()
        setvalidUsername(username);
        setvalidemail(email);
        setusername('');
        setemail('');
        setPassword('');
        setconfpassword('');
    }



    return (
        <div>
            <Form
            //envio de props
            password={password}
            confpassword={confpassword}
            username={username}
            email={email}
            onChange={onChange}
            onChange2={onChange2}
            onChange3={onChange3}
            onChange4={onChange4}
            switchShown={switchShown}
            shown={shown} 
            submit={submit}
            //fin envio de props
            />
        </div>
    );
}

export default Body;