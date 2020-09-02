import * as firebase from 'firebase/app'

import  'firebase/auth';
import 'firebase/firestore';

import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();



export const AddUser = async (Auth, additionalData) => {

    if(!Auth) return

    const userRef = db.doc(`users/${Auth.uid}`);
    const snapShot = await userRef.get();


    const createdAt = new Date();

    if(!snapShot.exists) {
        const {displayName, email} = Auth;
        try {
            await userRef.set({
             name: displayName,
             email,
             date: createdAt,
             ...additionalData
            })
        } 
        catch{
            console.log("error")
        }
    }
}


export const Auth = firebase.auth();


export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();


googleProvider.setCustomParameters({prompt: 'select_account'});
facebookProvider.setCustomParameters({prompt: 'select_account'});

export const SignInWithGoogle = () => Auth.signInWithPopup(googleProvider);
export const SignInWithFacebook = () => Auth.signInWithPopup(facebookProvider);
