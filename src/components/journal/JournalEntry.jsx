import React from 'react';

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center' ,
                    backgroundImage: 'url(https://cdn.pixabay.com/photo/2020/05/19/20/01/integration-5192458_960_720.jpg)'
                }}
            ></div>
            
            <div className="journal__entry-body">
                <p className="journal__entry-title">Un nuevo dia</p>
                <p className="journal__entry-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="journal__entry-date-box">
                <span>Lunes</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
