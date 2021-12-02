import React from 'react'

export default function Book({
  book,
  bookCover,
  title,
  authors,
  numberOfAuthors
}) {
  return (
    <li key={book.key}>
      <div className='media'>
        <div className='image'>{<img src={bookCover} alt={book.title} title={book.title}/>}</div>
        <div className='content'>
          <div className="fields">
            <label htmlFor="title">Book Title:</label>
            <span name="title">{title}</span>
          </div>
          <div className="fields">
            <label htmlFor="author">Book Author:</label>
            {authors && authors.map((author, index) => {
              return <span key={author} name="author">
                      {author}
                      {(index + 1) !== numberOfAuthors && <span>{", "}</span> }
                    </span>
            }
          )}
          </div>
          <div className="fields">
            <label htmlFor="publishYear">Published Year:</label>
            <span name='publishYear'>{book.first_publish_year}</span>
          </div>
        </div>  
      </div>
    </li>
  )
}
