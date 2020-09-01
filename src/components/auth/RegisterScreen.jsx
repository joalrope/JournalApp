import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";

import { useForm } from "../../hokks/useForm";
import { setError, clearError } from "../../actions/ui";
import { startRegisterEmailPassword } from "../../actions/auth";


export const RegisterScreen = () => {
    
    const dispatch = useDispatch();
    const {msgError} = useSelector( state => state.ui );

    const [{ name, email, password, password2 }, handleInputChange] = useForm({
        name: "Jose Rodriguez",
        email: "joalrope@hotmail.com",
        password: "12345678",
        password2: "12345678"
    });

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()){

            dispatch(startRegisterEmailPassword(email, password, name));
            
        }

    };

    const isFormValid = () => {

        if (name.trim().length === 0 ) {
            // dispatch(setError('El nombre es requerido'));
            dispatch(setError('El nombre es requerido'));
            return false;
        } else if (!validator.isEmail(email) ) {
            dispatch(setError('El email no es valido'));
            return false;
        } else if (password !== password2 ) {
            dispatch(setError('Las contraseñas son diferentes'));
            return false
        } else if (password.length < 8) {
            dispatch(setError('Las contraseña debe tener al menos 8 caracteres'));
            return false;
        }
        
        dispatch(clearError());
        return true;
    };

    return (
        <>
            <h3 className="auth__title mb-5">Registrar</h3>

            <form onSubmit={handleRegister}>
                
                {
                    msgError &&
                    (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
                }

                <input
                    className="auth__input"
                    type="text"
                    placeholder="Nombre"
                    autoComplete="off"
                    name="name"
                    value={name}
                    onChange={handleInputChange}    
                />

                <input
                    className="auth__input"
                    type="text"
                    placeholder="email"
                    autoComplete="off"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    className="auth__input"
                    type="password"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />

                <input
                    className="auth__input"
                    type="password"
                    placeholder="Confirmar password"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                />

                <button className="btn btn-primary btn-block mb-5 mt-1" type="submit">
                    Registar
                </button>

                <Link to="/auth/login" className="link">
                    <p className="auth__p-social-network">Ya esta registrado?</p>
                </Link>
            </form>
        </>
    );
};
