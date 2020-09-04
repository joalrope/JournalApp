import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment';
import { startSaveNote, startUploading } from '../../actions/notes';


export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const {active} = useSelector( state => state.notes );

    moment.locale('es');

    const noteDate = moment(active.date).format('dddd[,] DD [de] MMMM [de] YYYY');

    const handleSaveNote = () => {
        dispatch(startSaveNote(active));
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            dispatch(startUploading(file));
        }
    }


    return (
        <div className="notes__appbar">

            <input
                id= "fileSelector"
                type="file"
                name= ""
                style= {{display: 'none'}}
                onChange= {handleFileChange} />

            <span>{noteDate}</span>
            
            <div>
                <button
                    className="btn btn-outline"
                    onClick= {handlePictureClick}
                >
                    Seleccionar Imagen ...
                </button>
                
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
