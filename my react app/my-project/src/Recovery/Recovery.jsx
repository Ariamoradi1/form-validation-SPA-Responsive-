import React, {useState} from "react";
import "./Recovery.css"
import { Link } from "react-router-dom";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai"
import swal from "sweetalert";

const Recovery = () => {
    const [UserNameShowValue, setUserNameShowValue] = useState('')
    const [PasswordShowValue, setPasswordShowValue] = useState('')
   const submitHandler = (e) => {
   e.preventDefault()
   }
   const alertHandler = () => {
    if (UserNameShowValue === '' || !UserNameShowValue.includes('@gmail.com')) {
      swal({
        title:'error',
        text:'email is wrong',
        icon:'error',
        button:'ok'
      })
    } else {
      swal({
        title:'Completed',
        text:`your code has send to: ${UserNameShowValue}`,
        icon:'success',
        button:'ok'
  
      })
    }
   
   }
    return (
        <>
        <div className="container-recovery">
        
        <div className="information">
        <h1>Recovery Your Account</h1>
        <h2><span style={{color:'purple'}}>Aria Man</span> Technology</h2>

        
        <form onSubmit={submitHandler}>
        <input type="email" className="userNameHandler" value={UserNameShowValue} placeholder='enter your email' onChange={(event) => setUserNameShowValue(event.target.value)}/>
    
        <input type="text" className="passHandler" value={PasswordShowValue} placeholder='Enter the code' onChange={(event) => setPasswordShowValue(event.target.value)}/>
        <button className="recover-button" onClick={alertHandler}>Send Code</button>
        
        
        
        
        </form>
        <p><Link to='/'>or</Link> go back</p>
       <a href="https://twitter.com/AriaManProMax"><AiOutlineTwitter style={{color:'purple', fontSize:'25px'}} /></a>
        <a href="https://github.com/Ariamoradi1"><AiOutlineGithub style={{color:'purple', fontSize:'25px', marginLeft:'25px'}} /></a>
       <a href="https://www.linkedin.com/in/aria-moradi-a4402a244/?_l=en_US"> <AiFillLinkedin style={{color:'purple', fontSize:'25px', marginLeft:'20px'}} /></a>
       

        
        </div>
        <span className="dev-company">© 2022 AriaMan Technology, Inc.</span>

        </div>
        </>
    )
}


export default Recovery