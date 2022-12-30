import './Login.css'
import { FcGoogle } from 'react-icons/fc'
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'

function Login() {

    return (
        <>
            <div className='dualcontainer1'>
                <div className='attributes'>
                    <h1></h1>

                </div>
                <div className='login-container'>
                    <form>

                        <h2 className='login-h2'>Login to your Account</h2>
                        <p className='login-p'>See what is going on with your business</p>

                        <button className='google-login'>
                            <FcGoogle className='google-i' />
                            Continue with Google
                        </button>

                        <p className='or'>------------- or Sign in with Email ------------- </p>

                        <div className='mama'>
                        <div>
                        <input type='text' placeholder='Email'></input>
                        </div>
                        <div>
                        <input type='password' placeholder='Password' className='mama1'></input>
                        </div>
                        </div>
                        <div className='bottom2002'>
                            <div className='left'>
                            <input type='checkbox' id='check' className='check'/>
                            <label for='check'>Remember Me</label>
                            
            
                            </div>                           
                            <p2>Forgot password?</p2>
                        </div>
                               
                        <button className='login-page'>Login</button>
                       


                    </form>

                    <div className='bottom message'>
                        <p className='register-prompt'>Not Registered Yet?</p>
                        <p className='create-account-prompt'>Create an account</p>
                    </div>
                </div>

            </div>

        </>
    )

}

export default Login 