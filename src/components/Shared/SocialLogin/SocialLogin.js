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

const SocialLogin = () => {
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);
    const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth);
    const [signInWithTwitter, userTwitter, loadingTwitter, errorTwitter] = useSignInWithTwitter(auth);
    return (
        <div className='login-container'>
            <button className="login-via" onClick={() => signInWithGoogle()}>
                <img src={google} alt="" />
                Login with google
            </button>
            <button className="login-via" onClick={() => signInWithFacebook()}>
                <img src={facebook} alt="" />
                Login with facebook
            </button>
            <button className="login-via" onClick={() => signInWithGithub()}>
                <img src={github} alt="" />
                Login with github
            </button>
            <button className="login-via" onClick={() => signInWithTwitter()}>
                <img src={twitter} alt="" />
                Login with twitter
            </button>
        </div>
    );
};

export default SocialLogin;