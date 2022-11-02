import React, {useState} from "react";
import "./SignUp.css"
import { Link } from "react-router-dom";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import swal from "sweetalert";

const SignUP = () => {
    const [UserNameShowValue, setUserNameShowValue] = useState('')
    const [Name, setName] = useState('')
    const [NumberShowValue, setNumberShowValue] = useState('')
    const [CreatePassword, setCreatePassword] = useState('')
   const submitHandler = (e) => {
   e.preventDefault()
   }
   const signupclickHandler = () => {
    if (UserNameShowValue === '' || Name === '' || isNaN(NumberShowValue) || CreatePassword < 8) {
        swal({
            title:'error',
            text:'please enter the information correctly',
            icon:'error',
            button:'ok'
          })
    } else {
        swal({
            title:'completed',
            text:`your registration was successful Mr ${UserNameShowValue}`,
            icon:'success',
            button:'ok'
          })
    }
   }
    return (
        <>
        <div className="container-signup">
        
        <div className="information">
        <h1>Sign Up</h1>
        <h2><span style={{color:'purple'}}>Aria Man</span> Technology</h2>

        
        <form onSubmit={submitHandler}>
        <input type="text" className="usersign-name" value={Name} placeholder='enter your name and last name' onChange={(event) => setName(event.target.value)}/>
    
        <input type="text" className="usersign-id" value={UserNameShowValue} placeholder='Set a Username' onChange={(event) =>  setUserNameShowValue(event.target.value)}/>
        <input type="text" className="usersign-number" value={NumberShowValue} placeholder='Enter Your Phone number' onChange={(event) => setNumberShowValue(event.target.value)}/>
        <input type="password" className="usersign-pass" value={CreatePassword} placeholder='Enter Your Password' onChange={(event) => setCreatePassword(event.target.value)}/>
        <button className="button-sign" onClick={signupclickHandler}>Sign Up</button>
        
        
        
        
        </form>
        <p>already have account?<Link to='/FormLogin'>Login</Link></p>
       <a href="https://twitter.com/AriaManProMax"><AiOutlineTwitter style={{color:'purple', fontSize:'25px'}} /></a>
        <a href="https://github.com/Ariamoradi1"><AiOutlineGithub style={{color:'purple', fontSize:'25px', marginLeft:'25px'}} /></a>
       <a href="https://www.linkedin.com/in/aria-moradi-a4402a244/?_l=en_US"> <AiFillLinkedin style={{color:'purple', fontSize:'25px', marginLeft:'20px'}} /></a>
       

        
        </div>
        <span className="dev-company">© 2022 AriaMan Technology, Inc.</span>

        </div>
        </>
    )
}


export default SignUP