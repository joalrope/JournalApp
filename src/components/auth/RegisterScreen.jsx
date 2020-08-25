import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title mb-5" >Registrar</h3>
            <form autocomplete="off">
                <input className="auth__input" type="text" placeholder="Nombre" name="name" />
                <input className="auth__input" type="text" placeholder="email" name="email" />
                <input className="auth__input" type="password" placeholder="password" name="password" />
                <input className="auth__input" type="password" placeholder="Confirmar password" name="password2" />
                <button className="btn btn-primary btn-block mb-5 mt-1" type="submit">
                    Registar
                </button>

                <Link to="/auth/login" className="link">
                    <p className="auth__p-social-network">
                        Ya esta registrado?
                    </p>
                </Link>
            </form>
        </>
    )
}
