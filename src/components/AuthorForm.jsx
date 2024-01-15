import React from 'react';
import { useFormik } from 'formik'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import '../styles/main.css'

export default function AuthorForm({addAuthor, toggleAddAuthor}) {
    const authorForm = useFormik({
        initialValues: {
            name: "",
            birthdate: null,
            biography: ""
        },
        onSubmit: (values) => {
            addAuthor(values)
            toggleAddAuthor()
        }
    })
    return (
        <div className="form-container">
            <button className="close-btn" onClick={toggleAddAuthor}><FontAwesomeIcon icon={faXmark}/></button>
            <form className="form author-form" onSubmit={authorForm.handleSubmit}>
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