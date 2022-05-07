import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';
import Footer from '../Footer/Footer';
import '../form-css/form.css'


const Register = () => {
    const [checked, setChecked] = useState(false);
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from.pathname || '/'
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
        const photoURL = e.target.photoURL.value
        const email = e.target.email.value
        const password = e.target.password.value
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName, photoURL })
        toast('verification email sent!')
        toast('User Profile Updated')
    }
    let errorMessage;
    if (userCreatingError) {
        errorMessage = userCreatingError?.message.split(':')[1]
    }
    if (newCreatedUser) {
        setTimeout(() => {
            navigate(from)
        }, 2000);
    }
    if (updatingUser) {
        return
    }
    if (updatingUserError) {
        toast('an error occured')
    }
    return (
        <>
            <div className='form-container'>
                <Form onSubmit={handleSubmit} className='form'>
                    <h3 className='text-center pb-3'>Register Now!</h3>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control name='name' type="text" placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicURL">
                        <Form.Control name='photoURL' type="text" placeholder="Enter The URL of Your Photo" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
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
                            <Button disabled={!checked} variant="dark" type="submit">Register</Button>
                            <Link className='text-decoration-none' to='/login'>Already Have an account?</Link>
                        </>
                    }

                </Form>
                <SocialLogin />
                <ToastContainer />
                <ToastContainer />
            </div>
            <Footer />
        </>
    );
};

export default Register;