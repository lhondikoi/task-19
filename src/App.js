import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Navbar from './components/Navbar';
import Home from './views/Home'
import BookManagement from './views/BookManagement';
import AuthorManagement from './views/AuthorManagement';

import './styles/app.css'

export default function App() {
  const template_book = {
    id: 1,
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    isbn: "978-1408855676",
    publishedOn: "2014-09-03"
  }

  const template_author = {
    id: 1,
    name: "J.K. Rowling",
    birthdate: "1965-07-31",
    biography: "Joanne Rowling (CH OBE FRSL) better known by her pen name J. K. Rowling, is a British author and philanthropist. She wrote Harry Potter, a seven-volume fantasy series published from 1997 to 2007. The series has sold over 600 million copies, been translated into 84 languages, and spawned a global media franchise including films and video games. The Casual Vacancy (2012) was her first novel for adults. She writes Cormoran Strike, an ongoing crime fiction series, under the alias Robert Galbraith."
  }
  
  let [bookList, setBookList] = React.useState([template_book])
  let [authorList, setAuthorList] = React.useState([template_author])

  return (
    <>
      <Header />
      <div className="dashboard-container">
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/books" element={<BookManagement bookList={bookList} setBookList={setBookList} />}></Route>
            <Route path="/authors" element={<AuthorManagement authorList={authorList} setAuthorList={setAuthorList}/>}></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}