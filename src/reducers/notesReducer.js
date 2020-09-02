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

        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            }
    
        default:
            return state;
    }

}
