import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { JournalEntries } from './JournalEntries';
import { startLogout } from '../../actions/auth';
import { StartNewNote } from '../../actions/notes';


export const Sidebar = () => {

    const dispatch = useDispatch();
    const {name} = useSelector( state => state.auth );

    const handleLogout = () => {
        dispatch(startLogout());
    }

    const handleAddNew = () => {
        dispatch(StartNewNote());
    }

    return (
        <aside className="jounal__sidebar" >
            <div className="journal__sidebar-navbar">
                <div>
                    <h3 className="mt-5" >
                        <i className="far fa-moon" ></i>
                        <span> {name}</span>
                    </h3>
                </div>

                <div className="mt-5">
                    <button className="btn btn-outline" onClick= { handleLogout } >Cerrar Sesión</button>
                </div>
            </div>

            <div
                className="journal__new-entry"
                onClick= { handleAddNew }
            >
                <i className="far fa-calendar-plus fa-5x" ></i>
                <p className="mt-5">Nueva Entrada</p>
            </div>

            <JournalEntries />
        </aside>
    )
}
