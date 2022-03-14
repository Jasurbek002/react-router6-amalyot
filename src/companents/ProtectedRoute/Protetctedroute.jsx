import React, { useEffect } from 'react';
import { Route, useLocation, useNavigate } from 'react-router-dom';

const Protetctedroute = ({children}) => {
    const novgate = useNavigate()
    const location = useLocation()
    useEffect(()=>{
         if(!localStorage.getItem('token',)){
             novgate('/auth/login',{
                 replace:false,
                 state:{
                     returnUrl:location
                 }
             })
         }
         console.log(location)
    },[location,novgate])
    return (
        <>
            
                 {children}
          
        </>
    );
}

export default Protetctedroute;
