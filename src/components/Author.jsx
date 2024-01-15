import React from 'react';

import '../styles/main.css'

export default function Author({ id, name, birthdate, biography, removeAuthor, openAuthorEditModal }) {
    return (
        <div className="author">
            <h3>{name}</h3>
            <span>{birthdate}</span>
            <p>{biography}</p>
            <div className="author-controls">
                <button className="btn btn-form" onClick={() => openAuthorEditModal({id, name, birthdate, biography})}>Edit</button>
                <button className="btn btn-form" onClick={() => removeAuthor(id)}>Delete</button>
            </div>
        </div>
    )
}