import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';

import moment from 'moment';


export const NotesAppBar = () => {

    // const {id, title, body, url, date} = useSelector( state => state.notes.active );
    const {date} = useSelector( state => state.notes.active );
    
    const noteDate = moment(date).format('DD [de] MMMM [de] YYYY');

    // const dispatch = useDispatch();

    // dispatch();

    // const handleSaveNote = () => {

    // };

    return (
        <div className="notes__appbar">

            <span>{noteDate}</span>
            
            <div>
                <button className="btn btn-outline">Imagen</button>
                <button
                    className="btn btn-outline"
                    // onClick= { handleSaveNote }
                >
                    Guardar
                </button>
            </div>
        </div>
    )
}
