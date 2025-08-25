import { useState } from "react"
import "../css/signup.css"

function Signup(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        const payload={
            email:email,
            password:password,
            confirmPassword:confirmPassword
        }
        if(password===confirmPassword){
            alert("Your account create successfully")
            console.log("output: ",payload)
        }else{
            alert("password and confirm password are not matched")
        }
        setEmail("");
        setPassword("");
        setConfirmPassword("")
        
    }
    
    return(
        <>
        <div className="main-container">
            <div className="signup-page">
            <h1>Signup</h1>
            <form action="" className="form-container" onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" name="password" placeholder="Create password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <div className="password">
                <input type="password" name="confirmPassword" placeholder="Confirm password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                <i className="fa-solid fa-eye-slash"></i>
                </div>
                <button className='btn signup-btn' type="submit">Signup</button>
                <p className='account'>Already have an account?<span>Login</span></p>
                <div className='or'><div className="line-container"></div><p>Or</p><div className="line-container"></div></div>
                <button className='btn facebook-btn'><i className="fa-brands fa-facebook"></i><p>LogIn with Facebook</p></button>
                <button className='btn google-btn'><i className="fa-brands fa-google"></i><p>Login with Google</p></button>
            </form>
        </div>
        </div>
        </>
    )
}
export default Signup