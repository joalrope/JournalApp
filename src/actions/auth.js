import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';

import { types } from '../types/types';


export const startLoginEmailPassword = (email, password) => { 

    return (dispath) => {

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( async({ user }) => {

                dispath(
                    login(user.uid, user.displayName)
                )
            })
            .catch ( e => {
                console.log(e);
            });

    }
}


export const startRegisterEmailPassword = (email, password, name) => {

    return (dispath) => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async({ user }) => {

                await user.updateProfile({ displayName: name });

                dispath(
                    login(user.uid, user.displayName)
                )
            })
            .catch ( e => {
                console.log(e);
            })
    }

    
}


export const startLoginAuthGoogle = () => {
    
    return (dispath) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispath(
                    login(user.uid, user.displayName)
                );
            });
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName 
    }
})