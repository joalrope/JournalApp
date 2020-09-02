import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="algún título asombroso"
          className="notes__title-input"
          autoComplete="off"
        />

        <textarea
          placeholder="Que paso Hoy?"
          className="notes__textarea"
        ></textarea>

        <div className="notes__image">
            <img src="https://cdn.pixabay.com/photo/2016/03/31/08/00/painting-1292226_960_720.jpg" alt="painting"/>
        </div>

      </div>
    </div>
  );
};
