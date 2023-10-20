import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // Import Google Sign-In related functions
import app from '../../firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [success, setSuccss] = useState("");
    const [registerError, setRegisterError] = useState("");
    const auth = getAuth(app);
    const location = useLocation();
    const navigate = useNavigate();
    const prevLocation = useLocation();
    console.log(prevLocation)
    const from = location.state?.from?.pathname || '/';
    // const { from } = location.state || { from: { pathname: '/service/:id' } }; // Default to '/service/:id'


    // Function to handle Google Sign-In
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log("Google Sign-In successful:", user);
                toast.success('Google Sign-In successful');
                window.location.href = from; // Redirect to the previous page

            })
            .catch((error) => {
                console.error("Google Sign-In error:", error);
                setRegisterError('Google Sign-In error: ' + error.message);
            });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setRegisterError('');
        setSuccss('');
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                setSuccss('Login successful');
                toast.success('Login successful');
                console.log(res.user);
                console.log("Logged in");
                // const navigate = useNavigate();
                // navigate('/');
                window.location.href = from; // Redirect to the previous page



            })
            .catch(error => {
                console.error(error);

                 setRegisterError('invalid email or password');
                 toast.error('invalid email or password');

                 console.log(registerError);
            });
    }

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <h1 className='text-2xl mb-2 font-bold '>Login  Form</h1>
            <div className="bg-white p-8 rounded shadow-md w-96">
                {/* {registerError && toast.error(registerError)} */}
                {/* {success && toast.success(succss)} */}
                <h1 className="text-2xl font-semibold mb-4"></h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                        <input type="email" id="email" name="email" className="w-full p-2 border rounded focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input type="password" id="password" name="password" className="w-full p-2 border rounded focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="text-center ">
                        <div className='flex justify-between'>
                        <button type="submit" className="btn bg-green-500 px-6">Login</button>
                        <button type="button" onClick={handleGoogleSignIn} className=' btn bg-orange-700'>Sign in with Google</button>
                        </div>
                        <p>Don't have an Account?</p>
                        <Link to="/Register" className="btn btn1 bg-blue-500 mr-2">
                            Create Now
                        </Link>
                    </div>
                </form>
            </div>
            <ToastContainer /> {/* Add this component to display toast notifications */}

        </div>
    );
};

export default Login;
