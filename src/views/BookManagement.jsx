import React from 'react'

import Book from '../components/Book'
import BookForm from '../components/BookForm'
import EditBookForm from '../components/EditBookForm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import '../styles/main.css'

export default function BookManagment({bookList, setBookList}) {
    
  let [addBookForm, setAddBookForm] = React.useState(false)
  let [editBookModal, setEditBookModal] = React.useState({display: false, bookDetails: {}})

  function toggleAddBook() {
    setAddBookForm(!addBookForm)
  }
    
  function addBook(book) {
      setBookList([...bookList, {id: bookList.length+1, ...book}])
    }
  
    function openBookEditModal(bookDetails) {
      setEditBookModal({display: true, bookDetails: bookDetails})
    }
  
    function closeBookEditModal() {
      setEditBookModal({display: false, editBookDetails: {}})
    }
  
    function editBook(editedBook) {
      setBookList(bookList.map(book => {
        return book.id === editedBook.id ? editedBook : book
      }))
    }
  
    function removeBook(id) {
      setBookList(bookList.filter(book => book.id !== id))
    }
    return (
        <section className="dashboard-right">
        <div className="book-list">
          { bookList.map(book => (
            <Book 
              key={book.id} 
              removeBook={removeBook} 
              openBookEditModal={openBookEditModal} 
              {...book}
            />
          )) }
        </div>
        {addBookForm && <BookForm addBook={addBook} toggleAddBook={toggleAddBook}/>}
        { editBookModal.display && 
          <EditBookForm 
            bookDetails={editBookModal.bookDetails}
            editBook={editBook}
            closeBookEditModal={closeBookEditModal}
          />
        }
        {!addBookForm && 
          <button
            className="btn btn-toggle-form"
            onClick={toggleAddBook}>
              <FontAwesomeIcon icon={faPlus} />
          </button>
        }
      </section>
    )
}