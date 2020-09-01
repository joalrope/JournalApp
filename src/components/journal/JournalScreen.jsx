import React from 'react';
import { NoteScreen } from '../notes/NoteScreen';
import { useSelector } from 'react-redux';

import { Sidebar } from './Sidebar';
import { NothingSelected } from './NothingSelected';

export const JournalScreen = () => {

    const {active} = useSelector(state => state.notes)

    return (
        <div className="Journal__main-content" >

            <Sidebar />


            <main>
                {
                    (active)
                        ? (<NoteScreen />)
                        : (<NothingSelected/>)
                }
            </main>


        </div>
    )
}
