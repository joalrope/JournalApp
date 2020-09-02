import { db } from '../firebase/firebaseConfig';


export const loadNotes = async (uid) => {

    const notesInDB = await db.collection(`${uid}/journal/notes`).get()    
    const notes = [];

    notesInDB.forEach( note => {
        notes.push({
            id: note.id,
            ...note.data()
        });
    });

    return notes;
}