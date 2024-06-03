import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../authSlice'; // Import the login action from your Redux slice
import { accounts } from '../../Data/Accounts';

function SignIn({ setShowSignIn }) {
    const [regUsername, setRegUserName] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPassword, setRegPassWord] = useState('');
    const [loginUsername, setLoginUserName] = useState('');
    const [loginPassword, setLoginPassWord] = useState('');
    const dispatch = useDispatch();

    const closeWindow = () => {
        setShowSignIn(false);
    };

    const handleRegister = (e) => {
        e.preventDefault(); // Prevent default form submission
    
        // Regular expression to validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Check if username or password is empty
        if (!regUsername.trim()) {
            alert('Please fill in Username');
        } else if (!regEmail.trim()) {
            alert('Please fill in Email');
        } else if (!emailRegex.test(regEmail)) {
            alert('Please enter a valid Email address');
        } else if (!regPassword.trim()) {
            alert('Please fill in Password');
        } else if (regPassword.length < 8) {
            alert('Password must be at least 8 characters long');
        } else {
            // Check if the username already exists
            const isExistingUser = accounts.some(user => user.username === regUsername && user.email === regEmail);
            
            if (isExistingUser) {
                alert('Username or Email is used. Please choose another one!');
            } else {
                // Add new user to the login array
                accounts.push({ username: regUsername, password: regPassword, email: regEmail });
                alert('Đăng ký thành công');
                console.log(accounts)
                // Clear input fields after successful registration
                setRegUserName('');
                setRegPassWord('');
                setRegEmail('');
            }
        }
    }

    const handleLogIn = (e) => {
        e.preventDefault();
        if (!loginUsername.trim()) {
            alert('Please fill in Username to continue!');
        } else if (!loginPassword.trim()) {
            alert('Please fill in Password to continue!');
        } else {
            const user = accounts.find(account => account.username === loginUsername && account.password === loginPassword);
            if (user) {
                alert('Successfully Log In. We are navigating you to Home page!');
                dispatch(login(user)); // Dispatch the login action with the user object
                setShowSignIn(false);
            } else {
                alert('Wrong Username or Password!');
            }
            setLoginUserName('');
            setLoginPassWord('');
        }
        console.log({ username: loginUsername, password: loginPassword });
    };

    useEffect(() => {
        const container = document.querySelector('.modal-container');
        const sign_in_btn = document.querySelector('#sign-in-btn');
        const sign_up_btn = document.querySelector('#sign-up-btn');
        const sign_in_btn2 = document.querySelector('#sign-in-btn2');

        const switchToSignUpMode = () => {
            container.classList.add("sign-up-mode");
        };

        const switchToSignInMode = () => {
            container.classList.remove("sign-up-mode");
        };

        sign_up_btn.addEventListener("click", switchToSignUpMode);
        sign_in_btn.addEventListener("click", switchToSignInMode);
        sign_in_btn2.addEventListener("click", switchToSignInMode);

        return () => {
            sign_up_btn.removeEventListener("click", switchToSignUpMode);
            sign_in_btn.removeEventListener("click", switchToSignInMode);
            sign_in_btn2.removeEventListener("click", switchToSignInMode);
        };
    }, []);

    const toggleSignUpForm = () => {
        const signUpForm = document.querySelector('.sign-up-form');
        const signInForm = document.querySelector('.sign-in-form');
        signUpForm.style.display = signUpForm.style.display === 'none' ? 'block' : 'none';
        signInForm.style.display = signUpForm.style.display === 'none' ? 'block' : 'none';
    };

    return (
        <div className="modal">
            <div className="modal-frame">
                <i className="close-window fa-solid fa-circle-xmark" onClick={closeWindow}></i>
                <div className="modal-container">
                    <div className="signin-signup">
                        <form action="" className="sign-in-form" onSubmit={handleLogIn}>
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input
                                    value={loginUsername}
                                    type="text"
                                    placeholder="Username"
                                    onChange={e => setLoginUserName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input
                                    value={loginPassword}
                                    type="password"
                                    placeholder="Password"
                                    onChange={e => setLoginPassWord(e.target.value)}
                                    required
                                />
                            </div>
                            <a className="forget-password" href="#">Forgot password?</a> <br/>
                            <button type="submit" className="btn">LOG IN</button>
                            <div className="social-media-group">
                                <p className="social-text">Or Sign in with social platform</p>
                                <div className="social-media">
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-google"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                                <button className="switch-btn" onClick={toggleSignUpForm}>Create a new account</button>
                            </div>
                        </form>
                        <form action="" className="sign-up-form" onSubmit={handleRegister}>
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input 
                                    value={regUsername}
                                    type="text" 
                                    placeholder="Username" 
                                    onChange={e => setRegUserName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input 
                                    value={regEmail}
                                    type="text" 
                                    placeholder="Email" 
                                    onChange={e => setRegEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input 
                                    value={regPassword}
                                    type="password" 
                                    placeholder="Password" 
                                    onChange={e => setRegPassWord(e.target.value)}
                                    required
                                />
                            </div>
                            <input type="submit" value="Sign up" className="btn"/>
                            <p className="social-text">Or Sign in with social platform</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                            <button className="switch-btn" id="sign-in-btn">Already have account. Sign in now</button>
                        </form>
                    </div>
                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3>You already have an Account?</h3>
                                <p>Welcome back! Ready to dive into more archaeological adventures? Sign in now to continue exploring with us</p>
                                <button className="btn" id="sign-in-btn2">Sign in</button>
                            </div>
                            <img src="/assets/images/sign-in.png" alt="" className="image"/>
                        </div>
                        <div className="panel right-panel">
                            <div className="content">
                                <h3>You are a new Member?</h3>
                                <p>Join us today and unlock exclusive benefits! Gain access to premium content, special events, and insider updates.</p>
                                <button className="btn" id="sign-up-btn">Sign up</button>
                            </div>
                            <img src="/assets/images/sign-up.png" alt="" className="image"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SignIn;
