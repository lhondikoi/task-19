import React from 'react';

import '../styles/main.css'

export default function Book({id, title, author, isbn, publishedOn, removeBook, openBookEditModal}) {
    return (
        <div className="book">
            <h3>{title}</h3>
            <span>Author: {author} • Published: {publishedOn} • ISBN: {isbn}</span>
            <div className="book-controls">
                <button className="btn btn-form" onClick={() => openBookEditModal({id, title, author, isbn, publishedOn})}>Edit</button>
                <button className="btn btn-form" onClick={() => removeBook(id)}>Delete</button>
            </div>
        </div>
    )
}