import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { useForm } from "../../hokks/useForm";
import { startLoginEmailPassword, startLoginAuthGoogle } from "../../actions/auth";

export const LoginScreen = () => {
  
    const dispatch = useDispatch();

    const [{ email, password }, handleInputChange] = useForm({
        email: "joalrope@gmail.com",
        password: "123456",
    });

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
    };

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

                <button className="btn btn-primary btn-block mb-5 mt-1" type="submit">
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
