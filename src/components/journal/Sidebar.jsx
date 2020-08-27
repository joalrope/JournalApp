import React from 'react';
import { JournalEntries } from './JournalEntries';



export const Sidebar = () => {
    return (
        <aside className="jounal__sidebar" >
            <div className="journal__sidebar-navbar">
                <div>
                    <h3 className="mt-5" >
                        <i className="far fa-moon" ></i>
                        <span> Joalrope</span>
                    </h3>
                </div>

                <div className="mt-5">
                    <button className="btn btn-outline">Logout</button>
                </div>
            </div>

            <div className="journal__new-entry" >
                <i className="far fa-calendar-plus fa-5x" ></i>
                <p className="mt-5">New Entry</p>
            </div>

            <JournalEntries />
        </aside>
    )
}
