import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';

if (!firebase.app.Length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

    const history = useHistory();
    const location = useLocation();
    const [error, setError] = useState();
    let { from } = location.state || { from: { pathname: "/" } }

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(GoogleAuthProvider)
            .then((result) => {
                const user = result.user;
                const loggedInUser = { name: user.displayName, email: user.email };
                localStorage.setItem('user', JSON.stringify(loggedInUser));
                history.replace(from);
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    return (
        <div className="login-page container align-items-center ">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 shadow p-5">
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-danger">Forgot your password?</label>
                    </div>
                    <div className="from-group mt-5">
                        <button className="btn btn-brand" onClick={handleGoogleSignIn}>Google Sign in</button>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block align-self-end">
                    {/* <img className="img-fluid" src={LoginBg} alt="" /> */}
                </div>
            </div>
        </div>
    );
};

export default Login;