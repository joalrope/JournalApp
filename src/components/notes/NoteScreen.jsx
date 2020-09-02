import React from 'react';
import { useSelector } from 'react-redux';

import { NotesAppBar } from './NotesAppBar';
import { useForm } from '../../hooks/useForm';

export const NoteScreen = () => {
    const {active: note} = useSelector( state => state.notes );

    const [{title, body, url}, handleInputChange] = useForm(note);


    return (
        <div className="notes__main-content">
        <NotesAppBar />

        <div className="notes__content">
            <input
            type="text"
            placeholder="algún título asombroso"
            className="notes__title-input"
            autoComplete="off"
            name= "title"
            value= {title}
            onChange= {handleInputChange}
            />

            <textarea
            placeholder="Que paso Hoy?"
            className="notes__textarea"
            name= "body"
            value= {body}
            onChange= {handleInputChange}
            ></textarea>

            <div className="notes__image">
                <img src= {url} alt="painting"/>
            </div>

        </div>
        </div>
    );
};
