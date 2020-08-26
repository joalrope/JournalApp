import React from 'react';
import { Sidebar } from './Sidebar';
import { NoteScreen } from '../notes/NoteScreen';
// import { NothingSelected } from './NothingSelected';

export const JournalScreen = () => {
    return (
        <div className="Journal__main-content" >

            <Sidebar />


            <main>

                {/* <NothingSelected/> */}
                <NoteScreen />

            </main>


        </div>
    )
}
