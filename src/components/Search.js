import React from 'react'

export default function Search({
	searchKeyWord,
	handleOnChangeInput,
	handleOnSubmit
}) {
		
	return (
		<div>
			<form onSubmit={handleOnSubmit}>
				<label htmlFor="searchBook">Enter Book Title:{' '}</label>
				<input
					type="text"
					id="searchBook" name="searchBook"
					value= {searchKeyWord}
					onChange= {handleOnChangeInput}
					placeholder="Search for a book"
				/>
				<button type="submit" data-testid="search" className='button' data-message="This is search button">Search</button>
      </form>			
		</div>
	)
}
