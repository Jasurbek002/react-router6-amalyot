import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../Login/login.scss"
const Login = () => {
    const {state:{returnUrl}} = useLocation()
    const novigate = useNavigate()
   
    const hendlarsumit =(event)=>{
        event.preventDefault()
        localStorage.setItem('token',"hello")
        if(returnUrl) {
            novigate(`${returnUrl.pathname}${returnUrl.search}`,{
                  state:{
                      message:"bajarildi",
                      
                  }
            })
        }
       
    }
    return (
       <div>
            <form onSubmit={hendlarsumit} className='Login'>
            <h1 className='Login__title'>LOGIN</h1>
            <input className='Login__email' type="text" />
            <input className='Login__pass' type="password" />
            <button type='sumit' className='Login__btn'>Login</button>
        </form>
       </div>
    );
}

export default Login;
