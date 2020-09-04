import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { NotesAppBar } from './NotesAppBar';
import { useForm } from '../../hooks/useForm';
import { activeNote } from '../../actions/notes';

export const NoteScreen = () => {

    const {active: note} = useSelector( state => state.notes );
    const [formValues, handleInputChange, reset] = useForm(note);
    const {body, title}= formValues;

    const activeId = useRef(note.id);

    const dispatch = useDispatch();

    useEffect( () => {
        if (note.id !== activeId.current) {
            reset(note)
            activeId.current = note.id
        } 
    }, [note, reset])

    useEffect(() => {
        dispatch(activeNote(formValues.id, {...formValues} ));
        
    }, [formValues, dispatch])

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
            </div>
            
            {
                note.url
                && (
                    <div className="notes__image">
                        <img src= {note.url} alt="painting"/>
                    </div>
                    )
            }            
        </div>
    );
};
