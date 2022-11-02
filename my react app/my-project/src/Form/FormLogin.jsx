import React, { useState } from "react";
import './FormLogin.css'
import { Link } from "react-router-dom";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai"

const FormLogin = () => {
    const [UserNameShowValue, setUserNameShowValue] = useState('')
    const [PasswordShowValue, setPasswordShowValue] = useState('')

    const submitHandler = (e) => {
    e.preventDefault()
    }
    return (
    <>
    
        <div className="container-login">
        
        <div className="information">
        <h1>Login Your Account</h1>
        <h2><span style={{color:'purple'}}>Aria Man</span> Technology</h2>

        
        <form onSubmit={submitHandler}>
        <input type="text" className="userlogin-name" value={UserNameShowValue} placeholder='User Name' onChange={(event) => setUserNameShowValue(event.target.value)}/>
        {
          UserNameShowValue.length < 4 && (
            <span className="username-alert" style={{color:'red'}}>user name must be more than four letters</span>
          )
        }
        <input type="password" className="userlogin-pass" value={PasswordShowValue} placeholder='Password' onChange={(event) => setPasswordShowValue(event.target.value)}/>
        {
          PasswordShowValue.length < 8 && (
            <span className="password-alert" style={{color:'red'}}>password must be more than 8 characters</span>
          )
        }
        <button className="button-login">Login</button>
        
        
        
        
        </form>
        <p><Link to='/Recovery'>forget</Link> your password?</p>
       <a href="https://twitter.com/AriaManProMax"><AiOutlineTwitter style={{color:'purple', fontSize:'25px'}} /></a>
        <a href="https://github.com/Ariamoradi1"><AiOutlineGithub style={{color:'purple', fontSize:'25px', marginLeft:'25px'}} /></a>
       <a href="https://www.linkedin.com/in/aria-moradi-a4402a244/?_l=en_US"> <AiFillLinkedin style={{color:'purple', fontSize:'25px', marginLeft:'20px'}} /></a>
       

        
        </div>
        <span className="dev-company">© 2022 AriaMan Technology, Inc.</span>

        </div>
        
    
    </>
    )
}

export default FormLogin