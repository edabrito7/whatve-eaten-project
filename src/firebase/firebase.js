import * as firebase from 'firebase/app'

import  'firebase/auth';

import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);



export const Auth = firebase.auth();


export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();


googleProvider.setCustomParameters({prompt: 'select_account'});
facebookProvider.setCustomParameters({prompt: 'select_account'});

export const SignInWithGoogle = () => Auth.signInWithPopup(googleProvider);
export const SignInWithFacebook = () => Auth.signInWithPopup(facebookProvider);
