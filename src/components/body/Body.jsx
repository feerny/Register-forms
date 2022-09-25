import React,{useState} from 'react';
import Form from '../ui/Form'
import FormLogin from '../ui/FormLogin'
import Home from '../ui/Home'
import { Routes,Route,useNavigate   } from 'react-router-dom';
import axios from 'axios'





function Body() {
    let navigate = useNavigate();

    const postApi=()=>{
        axios.post('https://backend-edw.herokuapp.com/usuario',{
            "username":username,
            "password":password,
            "name":username
        })
        .then(function (response) {
            // handle success
            console.log(response.data.Message);
            setmessage(response.data.Message);
           //response.data.map((data => console.log(data)));
        })
        .catch(function (error) {
            // handle error
            alert(error.message+" sin conexion");
        });
    }



    //inicio de constantes register
    const [username, setusername] = useState('');
    const [message, setmessage] = useState('')
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

    //inicio de constantes login

    const [user, setuser] = useState("")
    const onChangeUser = ({ currentTarget }) => setuser(currentTarget.value);
    const [passworduser, setpassworduser] = useState("")
    const onChangePassword = ({ currentTarget }) => setpassworduser(currentTarget.value);

    //fin de constantes




    function handleClick() {
        navigate('/')
      }
   

    //evento que se ejecuta al enviar el formulario
    const submit=(event)=>{
        if ((username.indexOf('`')!== -1 || username.indexOf('.')!== -1 || username.indexOf('@')!== -1 || username.indexOf('!')!== -1 || username.indexOf('%')!== -1 || username.indexOf('$')!== -1 || /\s/.test(username)) || (email.indexOf('.')=== -1 || email.indexOf('@')=== -1 || /\s/.test(email))) {
            console.log("error");
        }else{
            postApi();
            setusername('');
            setemail('');
            setPassword('');
            setconfpassword('');     

        }
        event.preventDefault()
        setvalidUsername(username);
        setvalidemail(email);
    }

    const getApi=()=>{
        axios.get('https://backend-edw.herokuapp.com/usuarios')
          .then(function (response) {
            response.data.map(data=>{
                if (user===data[1] && passworduser===data[3]) {
                    console.log("usuario encontrado");
                    navigate('/home')
                    
                }else{
                    if (user===data[1]) {
                        console.log("usuario o contraseña errado");
                    } else if (user!==data[1]) {
                        console.log("usuario no existe");
                    }
                }

                return console.log("fin");
            })
          })
          .catch(function (error) {
            console.log(error);
            alert(error.message+" sin conexion");
          });
    }



    const submitLogin=(event)=>{
        if ((user.indexOf('`')!== -1 || user.indexOf('.')!== -1 || user.indexOf('@')!== -1 || user.indexOf('!')!== -1 || user.indexOf('%')!== -1 || user.indexOf('$')!== -1 || /\s/.test(user))) {
            console.log("error");
        }else{
            getApi();
 

        }
        event.preventDefault()

    }



    return (
        <div>

            <Routes>
                <Route path="/register" element={
                    <Form
                    //envio de props
                    validUsername={validUsername}
                    message={message}
                    handleClick={handleClick}
                    setmessage={setmessage}
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
                <Route path="/" element={
                    <FormLogin
                    //envio de props
                    submitLogin={submitLogin}
                    onChangePassword={onChangePassword}
                    passworduser={passworduser}
                    user={user}
                    onChangeUser={onChangeUser}
                    submit={submit}
                    switchShown={switchShown}
                    shown={shown} 
                    //fin envio de props
                    />
                 }/>
                    <Route path="/home" element={
                    <Home
                    //envio de props

                    //fin envio de props
                    />
                 }/>


            </Routes>   

        </div>
    );
}

export default Body;