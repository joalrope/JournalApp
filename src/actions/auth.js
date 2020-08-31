import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';

import { types } from '../types/types';


export const startLoginEmailPassword = (email, pasword) => { 

    return (dispatch) => {

        setTimeout(() => {
            dispatch(login(123, 'Pedro'))
        }, 3500);
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