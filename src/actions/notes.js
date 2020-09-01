import { db } from '../firebase/firebaseConfig';
import { types } from '../types/types';



export const StartNewNote = () => {

    return async (dispatch, getState) => {

        const {uid} = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes `).add(newNote);
        console.log(doc);
    }
}

export const activeNote = (id, note) => ({
    type: types.notesAddNew,
    
})