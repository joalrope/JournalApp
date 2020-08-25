import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
    return (
        <div>
            <h3 className="auth__title mb-5 animate__animated animate__fadeIn" >Ingresar</h3>
            <form autocomplete="off">
                <input className="auth__input" type="text" placeholder="email" name="email" />
                <input className="auth__input" type="password" placeholder="password" name="password" />
                <button className="btn btn-primary btn-block mb-5 mt-1" type="submit">
                    Ingresar
                </button>

                <div className="auth__social-network" >
                    <p className="auth__p-social-network"> Ingresar con redes sociales</p>
                    <div className="google-btn mb-5" >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <div className="btn-text">
                            <p className="btn-text">
                                <b>Ingresar con cuenta google</b>
                            </p>
                        </div>
                    </div>

                    <Link to="/auth/register" className="link">
                        <p className="auth__p-social-network">
                            Registre una cuenta nueva
                        </p>
                    </Link>

                </div>
            </form>
        </div>
    )
}
