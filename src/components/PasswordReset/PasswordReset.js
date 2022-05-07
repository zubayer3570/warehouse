import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import ErrorMessage from '../Shared/ErrorMessage/ErrorMessage';

const PasswordReset = () => {
    const navigate = useNavigate()
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const handlePasswordReset = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        sendPasswordResetEmail(email)
        if (sending) {
            return <Loading />
        }
        toast('Password Reseting Email Sent!')
        if (!error) {
            setTimeout(() => {
                navigate('/login')
            }, 1500);
        }
    }
    return (
        <>
            <div className='form-container'>
                <Form className='form' onSubmit={handlePasswordReset}>
                    <Form.Group className="mb-3" controlId="formBasicURL">
                        <Form.Control name='email' type="text" placeholder="Enter Your Email" />
                    </Form.Group>
                    <ErrorMessage error={error} />
                    <Form.Group className="mb-3" controlId="formBasicURL">
                        <Button variant='dark' type="submit">Reset Password</Button>
                    </Form.Group>
                </Form>
            </div>
            <ToastContainer />
        </>
    );
};

export default PasswordReset;