import {  createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext(); 


export const AuthProvider=({children})=>{

    const [token,setToken]=useState(localStorage.getItem("token"));
    const [user,setUser]=useState("");

    const storetokenInLS=(serverToken)=>{
        return localStorage.setItem('token',serverToken);
    };

    let isLoggedIn=!!token;  //token hai toh true else false
    console.log("-----------**-*-*-*-*-",isLoggedIn);
    

    //Tackeling the Logout funcationality
    const LogoutUser = () =>{
        setToken("");
        localStorage.removeItem("token");

    }


    //JWT authentication -  to get thee currently loggiged in user data

    const userAuthentication=async()=>{
        try {
            const response= await fetch("http://localhost:5454/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });

            if(response.ok){
                const data=await response.json();
                setUser(data.userData);
            }
        } catch (error) {
            console.error("Error fetching user data");
        }
    }

    useEffect(()=>{
        userAuthentication()
    },[]);

    return <AuthContext.Provider value={{isLoggedIn,storetokenInLS,LogoutUser,user}}>
        {children}
    </AuthContext.Provider>
};


export const useAuth=()=>{
    const authContextValue=useContext(AuthContext)
    if(!authContextValue){
        throw new Error("Use Auth outside of provider");
    }
    return authContextValue;
}    