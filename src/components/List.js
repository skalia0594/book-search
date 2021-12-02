import React from 'react'
import SortButton from './SortButton'
import Book from './Book'

export default function List({
  isloading,
  matchedRecord,
  disableTitleSort,
  disableYearSort,
  noRecordFound,
  sortTitle,
  sortPublishYear
}) {
  return (
    <div>
      {!isloading ?
        <>
          <SortButton
            matchedRecord={matchedRecord}
            disableTitleSort={disableTitleSort}
            disableYearSort={disableYearSort}
            sortTitle={sortTitle}
            sortPublishYear={sortPublishYear}
          />
          {noRecordFound && <span>No Record Found</span>
          }
          <ul>
            {matchedRecord.length > 0 && matchedRecord.map((book) => {
              const title = book.title
              const authors = book.author_name
              const numberOfAuthors = authors && authors.length
              const bookCover = book.cover_i && `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
              return <Book 
                        key={book.key}
                        book={book}
                        bookCover={bookCover}
                        title={title}
                        authors={authors}
                        numberOfAuthors={numberOfAuthors}
                      />
            }
            )}
          </ul>
        </>
        :
        <span>loading...</span>
      }        
    </div>
  )
}
