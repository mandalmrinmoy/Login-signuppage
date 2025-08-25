import "../css/signup.css"

function Signup(){
    return(
        <>
        <div className="main-container">
            <div className="signup-page">
            <h1>Signup</h1>
            <form action="" className="form-container">
                <input type="email" name="email" placeholder="Email"/>
                <input type="password" name="password" placeholder="Create password"/>
                <div className="password">
                <input type="password" name="confirmPassword" placeholder="Confirm password" />
                <i class="fa-solid fa-eye-slash"></i>
                </div>
                <button className='btn signup-btn'>Signup</button>
                <p className='account'>Already have an account?<span>Login</span></p>
                <div className='or'><div className="line-container"></div><p>Or</p><div className="line-container"></div></div>
                <button className='btn facebook-btn'><i class="fa-brands fa-facebook"></i><p>LogIn with Facebook</p></button>
                <button className='btn google-btn'><i class="fa-brands fa-google"></i><p>Login with Google</p></button>
            </form>
        </div>
        </div>
        </>
    )
}
export default Signup