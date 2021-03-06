import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleIcon from '../../Assets/icon/google-logo.ico'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../SharedPages/Loading';
import useToken from '../../Hooks/useToken';
import { ToastContainer } from 'react-toastify';



const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    let signInError;
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)

    }
    const [token] = useToken(gUser || user)
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (gLoading || loading) {
        return <Loading />
    }

    if (gError || error) {
        if (gError) {
            signInError = gError.message
        }
        else if (error) {
            signInError = error.message
        }
    }

    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        {<p className='text-red-500 mb-3'>{signInError}</p>}

                        <input className='w-full max-w-xs text-white btn btn-primary px-8 text-lg uppercase font-semibold bg-gradient-to-r from-primary to-secondary' type="submit" value="Login" />
                    </form>

                    <p>Forget Password? <Link className='text-primary font-semibold mb-2' to="/resetpass">Reset</Link></p>

                    <p>New here? <Link className='text-primary font-semibold' to="/signup">Sign Up</Link></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    > <img className='mr-2' src={googleIcon} alt="" /> Continue with Google</button>
                </div>
            </div>
            <ToastContainer />
        </div >
    );
};

export default Login;