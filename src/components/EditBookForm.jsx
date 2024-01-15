import React from 'react';
import { useFormik } from 'formik';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import '../styles/main.css'

export default function EditBookForm({bookDetails, closeBookEditModal, editBook}) {
    React.useEffect(()=>console.log(bookDetails), [])
    let bookForm = useFormik({
        initialValues: bookDetails,
        onSubmit: (values) => {
            editBook(values)
            closeBookEditModal()
        }
    })
    return (
        <div className="modal form-container">
            <button className="close-btn" onClick={()=>closeBookEditModal()}><FontAwesomeIcon icon={faXmark}/></button>
            <form className="form edit-book-form" onSubmit={bookForm.handleSubmit}>
                <div className="form-field">
                    <label htmlFor="title">Title</label>
                    <input name="title" type="text" defaultValue={bookForm.values.title} onChange={bookForm.handleChange}/>
                </div>
                
                <div className="form-field">
                    <label htmlFor="author">Author</label>
                    <input name="author" type="text" defaultValue={bookForm.values.author} onChange={bookForm.handleChange}/>
                </div>
                
                <div className="form-field">
                    <label htmlFor="isbn">ISBN</label>
                    <input name="isbn" type="text" defaultValue={bookForm.values.isbn} onChange={bookForm.handleChange}/>
                </div>
                
                <div className="form-field">
                    <label htmlFor="pub-date">Published</label>
                    <input name="publishedOn" type="date" defaultValue={bookForm.values.publishedOn} onChange={bookForm.handleChange}/>
                </div>

                <input className="btn btn-form" type="submit" value="Submit" />
            </form>
        </div>
    )
}