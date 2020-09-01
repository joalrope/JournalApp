import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { firebase } from '../../firebase/firebaseConfig';

import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { JournalScreen } from '../journal/JournalScreen';
import { login } from '../../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( (user) => {
            
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }

            setChecking(false);
        });
        
    }, [dispatch, setChecking, setIsLoggedIn])

    if (checking) {
        return (
            <h4>Espere...</h4>
        )
    }


    return (
            <Router>
                <div>
                    <Switch>
                        <PublicRoute
                            path="/auth"
                            isAuthenticated= { isLoggedIn }
                            component={AuthRouter}
                            redirectTo= "/"
                        />

                        <PrivateRoute
                            exact path="/"
                            isAuthenticated= { isLoggedIn }
                            component={JournalScreen}
                            redirectTo= "/auth/login"
                        />

                        <Redirect to='/auth/login' />
                    </Switch>
                </div>
            </Router>
    )
}
