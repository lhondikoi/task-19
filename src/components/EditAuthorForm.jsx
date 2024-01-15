import React from 'react';
import { useFormik } from 'formik';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import '../styles/main.css'

export default function EditAuthorForm({authorDetails, closeAuthorEditModal, editAuthor}) {
    let authorForm = useFormik({
        initialValues: authorDetails,
        onSubmit: (values) => {
            editAuthor(values)
            closeAuthorEditModal()
        }
    })
    return (
        <div className="modal form-container">
            <button className="close-btn" onClick={()=>closeAuthorEditModal()}><FontAwesomeIcon icon={faXmark}/></button>
            <form className="form edit-author-form" onSubmit={authorForm.handleSubmit}>
                <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" defaultValue={authorForm.values.name} onChange={authorForm.handleChange}/>
                </div>
                
                <div className="form-field">
                    <label htmlFor="birthdate">Date of birth</label>
                    <input name="birthdate" type="date" defaultValue={authorForm.values.birthdate} onChange={authorForm.handleChange}/>
                </div>
                
                <div className="form-field">
                    <label htmlFor="biography">Biography</label>
                    <textarea name="biography" defaultValue={authorForm.values.biography} onChange={authorForm.handleChange} rows="10"/>
                </div>

                <input className="btn btn-form" type="submit" value="Submit" />
            </form>
        </div>
    )
}