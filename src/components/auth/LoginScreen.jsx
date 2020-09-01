import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import validator from "validator";

import { useForm } from "../../hokks/useForm";
import { startLoginEmailPassword, startLoginAuthGoogle } from "../../actions/auth";
import { setError, clearError } from "../../actions/ui";

export const LoginScreen = () => {
  
    const dispatch = useDispatch();
    const {loading} = useSelector( state => state.ui );

    const [{ email, password }, handleInputChange] = useForm({
        email: "joalrope@hotmail.com",
        password: "12345678",
    });

    const handleLogin = (e) => {
        
        e.preventDefault();
    
        if (isFormValid()){
            dispatch(startLoginEmailPassword(email, password));
        }
    }


    const isFormValid = () => {

        if (!validator.isEmail(email) ) {
            dispatch(setError('El email no es valido'));
            return false;
        } else if (password.length < 8) {
            dispatch(setError('Las contraseña debe tener al menos 8 caracteres'));
            return false;
        }
        
        dispatch(clearError());
        return true;
    }


    const startLoginGoogle = () => {
        dispatch(startLoginAuthGoogle());
    }

    
    return (
        <div>
          <h3 className="auth__title mb-5 animate__animated animate__fadeIn">
              Ingresar
          </h3>
            <form onSubmit={handleLogin}>
                <input
                    className="auth__input"
                    type="text"
                    placeholder="email"
                    autoComplete="off"
                    name="email"
                    onChange={handleInputChange}
                    value={email}
                />

                <input
                    className="auth__input"
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleInputChange}
                    value={password}
                />

                
                <button
                    className="btn btn-primary btn-block mb-5 mt-1"
                    type="submit"
                    disabled= {loading}
                >
                    Ingresar
                </button>
  

                <div className="auth__social-network">
                    <p className="auth__p-social-network"> Ingresar con redes sociales</p>
                    <div
                        className="google-btn mb-5"
                        onClick= { startLoginGoogle }
                    >
                        <div className="google-icon-wrapper">
                            <img
                                className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="google button"
                            />
                        </div>
                        <div className="btn-text">
                            <p className="btn-text">
                                <b>Ingresar con cuenta google</b>
                            </p>
                        </div>
                    </div>

                    <Link to="/auth/register" className="link">
                        <p className="auth__p-social-network">Registre una cuenta nueva</p>
                    </Link>
                </div>
            </form>
        </div>
    );
};
