import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment';
import { startSaveNote } from '../../actions/notes';


export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const {active} = useSelector( state => state.notes );

    moment.locale('es');

    const noteDate = moment(active.date).format('DD [de] MMMM [de] YYYY');

    const handleSaveNote = () => {
        dispatch(startSaveNote(active));
    }


    return (
        <div className="notes__appbar">

            <span>{noteDate}</span>
            
            <div>
                <button className="btn btn-outline">Imagen</button>
                <button
                    className="btn btn-outline"
                    onClick= { handleSaveNote }
                >
                    Guardar
                </button>
            </div>
        </div>
    )
}
