import React from 'react';
import google from '../../../Images/icons/google.png'
import facebook from '../../../Images/icons/facebook.png'
import github from '../../../Images/icons/github.png'
import twitter from '../../../Images/icons/twitter.png'
import './SocialLogin.css'
import { auth } from '../../../firebase.init';
import {
    useSignInWithGoogle,
    useSignInWithFacebook,
    useSignInWithGithub,
    useSignInWithTwitter
} from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const SocialLogin = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from.pathname || '/'
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);
    const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth);
    const [signInWithTwitter, userTwitter, loadingTwitter, errorTwitter] = useSignInWithTwitter(auth);
    if (userGoogle || userFacebook || userGithub || userTwitter) {
        navigate(from)
    }
    return (
        <div className='social-login-container'>
            {loadingGoogle ?
                <Loading />
                :
                <button className="login-via" onClick={() => signInWithGoogle()}>
                    <img src={google} alt="" />
                    Login with Google
                </button>
            }
            {loadingFacebook ?
                <Loading />
                :
                <button className="login-via" onClick={() => signInWithFacebook()}>
                    <img src={facebook} alt="" />
                    Login with Facebook
                </button>
            }
            {loadingGithub ?
                <Loading />
                :
                <button className="login-via" onClick={() => signInWithGithub()}>
                    <img src={github} alt="" />
                    Login with Github
                </button>
            }
            {loadingTwitter ?
                <Loading />
                :
                <button className="login-via" onClick={() => signInWithTwitter()}>
                    <img src={twitter} alt="" />
                    Login with Twitter
                </button>
            }
            <ErrorMessage error={errorGoogle} />
            <ErrorMessage error={errorFacebook} />
            <ErrorMessage error={errorGithub} />
            <ErrorMessage error={errorTwitter} />
        </div>
    );
};

export default SocialLogin;