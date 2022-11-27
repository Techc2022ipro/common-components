import React, {useEffect,useState} from "react";
import {Link, Redirect} from "react-router-dom";
import Requests, {Url} from "../../requests/Requests";
import Button from "../customHtmlComponents/Button/Button";

const Login = () => {
  const [verified, setVerified] = useState<Boolean>(false);
  const [identifier, setIdentifier] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    Requests.auth().then(res => setVerified(res.isVerified));
  }, []);

  const handleIdentifier = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdentifier(e.target.value);
  }

 const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const loginAction = async() => {
    await Requests.post(Url.AUTH, "login" , {
      identifier, 
      password
    });
  }  

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await loginAction();
    window.location.reload();
  }
  
  if(verified) return (<Redirect to="/" />);

  return (
    <div className="form-section">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Look-Book</h1>
        <div className="login-input-div">
          <div className="login-input-field">
            <label className="login-input-title">
              Username or Email
            </label>
            <input 
              type="text"  
              onChange={handleIdentifier} 
              value={identifier} 
              className="login-input"
            />
          </div>

          <div className="login-input-field">
            <label className="login-input-title">
              Password
            </label>
            <input 
              type="password"  
              onChange={handlePassword} 
              value={password} 
              className="login-input"
            />
            <Link to="/" className="form-link">Forgot Password?</Link>
          </div>
        </div>
        <Button type="submit" value="Login" />
        <p>Dont have an account? <Link to="/signup" className="form-link">Sign Up</Link></p>
      </form>
    </div>
  )
}

export default Login;
