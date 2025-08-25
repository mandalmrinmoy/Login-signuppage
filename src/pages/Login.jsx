import '../css/login.css'

function Login(){
    return(
        <>
        <div className="main-container">
            <div className="login-page">
            <h1>LogIn</h1>
            <form action="" className='form-container'>
                <input type="email" name="email" placeholder='Email' />
                <div className="password">
                <input type="password" name="password" placeholder="Password" />
                <i class="fa-solid fa-eye-slash"></i>
                </div>
                <p className='forgot-p'>Forgot password?</p>
                <button type='submit' className='btn login-btn'>LogIn</button>
                <p className='account'>Don't have an account? <span>Signup</span></p>
                <div className='or'><div className="line-container"></div><p>Or</p><div className="line-container"></div></div>
                <button className='btn facebook-btn'><i class="fa-brands fa-facebook"></i><p>LogIn with Facebook</p></button>
                <button className='btn google-btn'><i class="fa-brands fa-google"></i><p>Login with Google</p></button>
            </form>
        </div>
        </div>
        </>
    )
}
export default Login