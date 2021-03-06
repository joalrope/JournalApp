import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import 'moment/locale/es';

import { activeNote } from '../../actions/notes';

export const JournalEntry = ({id, body, date, title, url }) => {

    const dispatch = useDispatch();

    moment.locale('es');

    const noteDate = moment(date);

    if (!url) {
        url = 'favicon.png'
    }

    const handleEntryClick = () => {
        dispatch(
            activeNote(id, {
                title, body, url, date
            })
        );
    }

    return (
        <div
            className="journal__entry pointer animate__animated animate__fadeIn animate__slow 1s"
            onClick= { handleEntryClick }
        >
           {
               url &&
                    <div 
                        className="journal__entry-picture"
                        style={{
                            backgroundImage:`url(${url})`
                        }}
                    ></div>
            }
            
            <div className="journal__entry-body">
                <p className="journal__entry-title">{title}</p>
                <p className="journal__entry-content">
                    {
                        (body.length >= 80 )
                            ? `${body.substring(0, 80)}...`
                            : body
                    }                    
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{noteDate.format('ddd')}</span>
                <h4>{noteDate.format('D')}</h4>
            </div>
        </div>
    )
}
