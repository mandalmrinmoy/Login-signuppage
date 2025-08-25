import { useState } from 'react'
import '../css/login.css'

function Login(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        const payload={
            email:email,
            password: password
        }
        console.log("login",payload)
    }
    return(
        <>
        <div className="main-container">
            <div className="login-page">
            <h1>LogIn</h1>
            <form action="" className='form-container' onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder='Email'  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <div className="password">
                <input type="password" name="password" placeholder="Password"  value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                <i className="fa-solid fa-eye-slash"></i>
                </div>
                <p className='forgot-p'>Forgot password?</p>
                <button type='submit' className='btn login-btn'>LogIn</button>
                <p className='account'>Don't have an account? <span>Signup</span></p>
                <div className='or'><div className="line-container"></div><p>Or</p><div className="line-container"></div></div>
                <button className='btn facebook-btn'><i className="fa-brands fa-facebook"></i><p>LogIn with Facebook</p></button>
                <button className='btn google-btn'><i className="fa-brands fa-google"></i><p>Login with Google</p></button>
            </form>
        </div>
        </div>
        </>
    )
}
export default Login