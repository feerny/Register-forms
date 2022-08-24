import React,{useState} from 'react';
import Form from '../ui/Form'
import FormLogin from '../ui/FormLogin'
import { Routes,Route } from 'react-router-dom';





function Body() {

    const axios = require('axios');
    axios.get('https://backend-edw.herokuapp.com/usuario/13')
    .then(function (response) {
        // handle success
        //console.log(response);
       response.data.map((data => console.log(data)));
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });

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





   

    //evento que se ejecuta al enviar el formulario
    const submit=(event)=>{
        if ((username.indexOf('`')!== -1 || username.indexOf('.')!== -1 || username.indexOf('@')!== -1 || username.indexOf('!')!== -1 || username.indexOf('%')!== -1 || username.indexOf('$')!== -1 || /\s/.test(username)) || (email.indexOf('.')=== -1 || email.indexOf('@')=== -1 || /\s/.test(email))) {
            console.log("error");
        }else{
            alert(`registro exitoso ${username}`);
            setusername('');
            setemail('');
            setPassword('');
            setconfpassword('');

        }
        event.preventDefault()
        setvalidUsername(username);
        setvalidemail(email);

    }



    return (
        <div>

            <Routes>
                <Route path="/" element={
                    <Form
                    //envio de props
                    validUsername={validUsername}
                    validemail={validemail}
                    confpassword={confpassword}
                    password={password}
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
                 }/>
                <Route path="/Login" element={
                    <FormLogin
                    //envio de props

                    //fin envio de props
                    />
                 }/>


            </Routes>   

        </div>
    );
}

export default Body;