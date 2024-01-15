import React from 'react';

import Author from '../components/Author'
import EditAuthorForm from '../components/EditAuthorForm'
import AuthorForm from '../components/AuthorForm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import '../styles/main.css'

export default function AuthorManagement({authorList, setAuthorList}) {

  let [addAuthorForm, setAddAuthorForm] = React.useState(false)
  let [editAuthorModal, setEditAuthorModal] = React.useState({display: false, authorDetails: {}})

  function toggleAddAuthor() {
    setAddAuthorForm(!addAuthorForm)
  }

  function addAuthor(author) {
      setAuthorList([...authorList, {id: authorList.length+1, ...author}])
  }

  function openAuthorEditModal(authorDetails) {
      setEditAuthorModal({display: true, authorDetails: authorDetails})
  }

  function closeAuthorEditModal() {
      setEditAuthorModal({display: false, authorDetails: {}})
  }

  function editAuthor(editedAuthor) {
      setAuthorList(authorList.map(author => {
      return author.id === editedAuthor.id ? editedAuthor : author
      }))
  }

  function removeAuthor(id) {
      setAuthorList(authorList.filter(author => author.id !== id))
  }
  return (
      <section className="dashboard-right">
      <div className="author-list">
        { authorList.map(author => (
          <Author 
            key={author.id} 
            removeAuthor={removeAuthor} 
            openAuthorEditModal={openAuthorEditModal}
            {...author}
          />
        ))}
      </div>
      {addAuthorForm && <AuthorForm addAuthor={addAuthor} toggleAddAuthor={toggleAddAuthor}/>}
      { editAuthorModal.display &&
        <EditAuthorForm 
          authorDetails={editAuthorModal.authorDetails}
          editAuthor={editAuthor}
          closeAuthorEditModal={closeAuthorEditModal}
        />
      }
      {!addAuthorForm && 
        <button
          className="btn btn-toggle-form"
          onClick={toggleAddAuthor}>
            <FontAwesomeIcon icon={faPlus} />
        </button>
      }
    </section>
  )
}