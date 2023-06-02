import React, { useContext } from 'react';
import login from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.loggedUser;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200 mb-8">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <div className="w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-4">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn text-white bg-[#FF3811] border-none" type="submit" value="Sign In" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New to Car Doctor? <Link to='/signup' className='font-semibold text-[#FF3811]'>Sign Up</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;