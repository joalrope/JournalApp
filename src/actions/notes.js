import Swal from 'sweetalert2';

import { db } from '../firebase/firebaseConfig';
import { types } from '../types/types';
import { loadNotes } from '../helper/loadNotes';
import { fileUpload } from '../helper/fileUpload';


export const StartNewNote = () => {

    return async (dispatch, getState) => {

        const {uid} = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        try {
            const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
    
            dispatch(activeNote(doc.id, newNote));
            dispatch(addNewNote( doc.id, newNote ) );
        } catch (error) {
            Swal.fire('No se pudo agregar la nueva entrada', 'Journal App', 'error');
        }
    }
}

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }    
});

export const addNewNote = ( id, note ) => ({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
})


export const startLoadingNotes = (uid) => {

    return async(dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}


export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
});


export const startSaveNote = (note) => {
    
    return async(dispatch, getState) => {

        const {uid} = getState().auth;

        const noteToFirestore = {...note};
        
        if (!noteToFirestore.url) {
            delete noteToFirestore.url 
        }
        delete noteToFirestore.id;

        try {
            await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore)
            dispatch(refreshNote(note.id, note ));
            Swal.fire(`Nota: ${note.title} salvada`, 'Journal App', 'success');
        } catch (err) {
            Swal.fire(`No se Pudo Guardar la Nota: ${note.title}`, 'Journal App' ,'error');
        }
    }
}


export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note
    }

});


export const startUploading = (file) => {

    return async(dispatch, getState) => {

        const {active:activeNote} = getState().notes;

        Swal.fire({
            title: 'Subiendo Imagen...',
            text: 'Espere por favor',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        })
        
        const fileUrl = await fileUpload(file);

        activeNote.url = fileUrl

        dispatch(startSaveNote(activeNote));

        Swal.close();
    }
}


export const startNoteDelete = (id) => {

    return async (dispatch, getState) => {
        
        const {uid} = getState().auth;
        await db.doc(`${uid}/journal/notes/${id}`).delete();
        dispatch(deleteNote(id));
    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
})

export const notesLogout = () => ({
    type: types.notesLogoutCleaninig,
})