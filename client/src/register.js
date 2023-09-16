import { json } from "react-router-dom";
import { useState } from "react";
import { JsonFunction } from "react-router-dom";
import axios from "axios";


const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [message, setMessage] = useState("Submit");
    
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';


      await axios.post('https://team-hub.onrender.com/create', {
      username,
      email,
      password,
      passwordConfirm
      }).then(res => console.log(res)).catch((err) => console.log(err))
      
    }


    /*let handleSubmit = (e) => {
        e.preventDefault();

        console.log('user?');
        fetch('http://localhost:3000/api/create', {
            mode: 'no-cors',
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                headers: {"Content-Type": "application/json"}
              }
        }).then(() => console.log('done')).catch(err => console.log(err))
    } */

    function handleMessage() {
      setMessage('Loading...')
    }


    return (
        <div className="register">
            <a href="http://localhost:3000/">
        <button className="submit-button back-button">Back</button>
        </a>
        
        <div className="form-box-flex">
            
            <form
            className="form-box"
            onSubmit={handleSubmit}
            >
                <h1>Sign Up</h1>
                <input value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text" placeholder="Username" className="email-text-box js-email" name="username"/>
                <input 
                onChange={(e) => setEmail(e.target.value)} value={email}
                type="text" placeholder="Email" className="email-text-box js-email"
                name="email"/>
                <input 
                onChange={(e) => setPassword(e.target.value)}
                value={password} type="password" placeholder="Password" className="password-box" name="password"/>
                <input value={passwordConfirm} 
                onChange={(e) => setPasswordConfirm(e.target.value)}
                type="password" placeholder="Confirm Password" className="password-box" name="passwordConfirm"/>
                <button onClick={handleMessage} type="submit" className="submit-button js-submit-button">{message}</button>
            </form>     
        </div>
    </div>
            
        
    );
}
 
export default Register;