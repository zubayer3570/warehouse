import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';


const Register = () => {
    const [checked, setChecked] = useState(false)
    const [
        createUserWithEmailAndPassword,
        newCreatedUser,
        creatingUser,
        userCreatingError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updatingUser, updatingUserError] = useUpdateProfile(auth);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayName = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        await createUserWithEmailAndPassword(email, password)
        updateProfile({ displayName })
    }
    let errorMessage;
    if (userCreatingError) {
        errorMessage = userCreatingError?.message.split(':')[1]
    }
    if (newCreatedUser) {
        toast('verification email sent!')
    }
    return (
        <div className='form-container'>
            <Form onSubmit={handleSubmit} className='form'>
                <h3 className='text-center pb-3'>Register Now!</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name='name' type="text" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setChecked(!checked)} type="checkbox" label="Accept Terms And Conditions" />
                </Form.Group>
                <p className='text-danger'>{errorMessage}</p>
                {creatingUser ?
                    <Loading />
                    :
                    <>
                        <Button disabled={!checked} variant="primary" type="submit">Register</Button>
                        <Link className='m-2 text-decoration-none' to='/login'>Already Have an account?</Link>
                    </>
                }

            </Form>
            <SocialLogin />
            <ToastContainer />
        </div>
    );
};

export default Register;