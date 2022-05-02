import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';
const firabseConfig = {
    apiKey: "AIzaSyDx5PsJoOgm23H6J6xVALWkd1ihqOgF7U4",
    authDomain: "warehouse-1fcab.firebaseapp.com",
    projectId: "warehouse-1fcab",
    storageBucket: "warehouse-1fcab.appspot.com",
    messagingSenderId: "1053349670567",
    appId: "1:1053349670567:web:d7cc60bce2871df8b9f582"
}
const app = initializeApp(firabseConfig)
const auth = getAuth(app)
export { auth }