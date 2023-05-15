import React from 'react';
import { auth, createUserWithEmailAndPassword } from '../firebase';
import './SignupScreen.css';
import { useRef } from 'react';

function SignupScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message);
        })
    };
    const signIn = (e) => {
        e.preventDefault();
        
    }
    console.log(emailRef.current.value);
    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder='Email' type="email"></input>
                <input ref={passwordRef} placeholder='Password' type="password"></input>
                <button type="submit" onClick={register}>Sign In</button>
                <h4><span className='signupScreen_gray' onClick={signIn}>New to Netflix?</span> 
                <span className='signupScreen_link'> Sign up now.</span></h4>
            </form>
        </div>
    );
}

export default SignupScreen;