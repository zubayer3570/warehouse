import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import './Login.css'
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import Footer from '../Footer/Footer';

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from.pathname || '/'
    const [checked, setChecked] = useState(false)
    let errorMessage;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        await signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate(from, { replace: true })
    }
    if (error) {
        errorMessage = error.message.split(':')[1]
    }
    return (
        <>
            <div onSubmit={handleSubmit} className='form-container'>
                <Form className='form'>
                    <h3 className='text-center pb-3'>Please Login</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setChecked(!checked)} type="checkbox" label="Accept Terms And Conditions" />
                    </Form.Group>
                    <p className='text-danger'>{errorMessage}</p>
                    {loading ?
                        <Loading />
                        :
                        <div className='btn-sec'>
                            <Button disabled={!checked} variant="primary" type="submit">Login</Button>
                            <Link className='text-decoration-none' to='/register'>Don't have an account?</Link>
                        </div>}

                </Form>
                <SocialLogin />
            </div>
            <div className="login-footer">
                <Footer />
            </div>
        </>
    );
};

export default Login;