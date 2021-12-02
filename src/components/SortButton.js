import React from 'react'

export default function Sort({
  matchedRecord,
  disableTitleSort,
  disableYearSort,
  sortTitle,
  sortPublishYear
}) {
  return (
    <div>
      {matchedRecord.length > 0 && <div className="">
            <label>Sort{": "}</label>
            <button type='button' disabled={disableTitleSort} className='button' onClick={() => sortTitle()} data-message="This is sort by title button">Title</button>
            <button type='button' disabled={disableYearSort} className='button' onClick={() => sortPublishYear()} data-message="This is sort by recent publish year button">Recent Publish Year</button>
          </div>
          }
    </div>
  )
}
