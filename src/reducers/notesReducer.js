import { types } from '../types/types';

/*
{
    notes: [],
    active: null || {
                        id: '44cf9e4c5744z3896',
                        title: '',
                        body: '',
                        imageUrl: '',
                        date: 8239645288
                    }
}
*/

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = ( state = initialState, action ) => {

    switch (action.type) {
        
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case  types.notesAddNew:
            return {
                ...state,
                notes: [ action.payload, ...state.notes ]
            }            

        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            }

        case types.notesUpdated:
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id
                        ? action.payload.note
                        : note
                )

            }

        case types.notesDelete:
            return {
                ...state,
                active: null,
                notes: state.notes.filter(note => note.id !== action.payload)
            }

        case types.notesLogoutCleaninig:
            return {
                ...state,
                notes: [],
                active: null
            }
    
        default:
            return state;
    }

}
