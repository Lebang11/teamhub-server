import { Link } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("Submit");
    
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      Axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';


      await Axios.post('http://team-hub.onrender.com/login', {
      email,
      password,
      }).then(res => console.log(res)).catch((err) => console.log(err))
      
    }

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
                <h1>Sign In</h1>

                <input 
                onChange={(e) => setEmail(e.target.value)} value={email}
                type="text" placeholder="Email" className="email-text-box js-email"
                name="email"/>
                <input 
                onChange={(e) => setPassword(e.target.value)}
                value={password} type="password" placeholder="Password" className="password-box" name="password"/>
                <button onClick={handleMessage} type="submit" className="submit-button js-submit-button">{message}</button>
            </form>     
        </div>
    </div>
            
        
    );
}
 
export default Login;