import { useState } from "react";

export const Login=()=>{
    const [user,setUser]=useState({
        email:"",
        password:""

    });
    //Handeling the input values

    const handleInput =(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setUser({
            ...user,[name]:value,
        });
    }

    //Handle the submit
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        console.log(user);
    }
    return(
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img src="/images/login.png" alt="Login Image" width="500" height="500"/>
                            </div>
                            {/* Lets tackle Registartion form */}

                            <div className="registration-form">    
                                    <h1 className="main-heading mb-3">Registration From</h1>
                                    <br/>

                                        <form onSubmit={handleFormSubmit}>{/**Hume form ke input ka seq same rkahna hai as per our model schema */}

                                            <div>
                                                <label htmlFor="email">Email</label>
                                                <input type="email" name="email" value={user.email} placeholder="Enter your email" id="email" onChange={handleInput} required autoComplete="off"/> 
                                            </div> 

                                            <div>
                                                <label htmlFor="password">Password</label>
                                                <input type="password" name="password" value={user.password} placeholder="Enter your password" id="password" onChange={handleInput} required autoComplete="off"/> 
                                            </div> 


                                            <br/>
                                            <button type="submit" className="btn btn-submit">Register Now</button>
                                        </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
};