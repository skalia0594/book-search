import React, { useState } from 'react'
import './App.css'
import Search from './components/Search'
import List from './components/List'

const App = () => {
  // states
  const [searchKeyWord, setSearchKeyWord] = useState('')
  const [matchedRecord, setMatchedRecord] = useState([])
  const [isloading, setIsLoading] = useState(false)
  const [noRecordFound, setNoRecordFound] = useState(false)
  const [prevSortData, setPrevSortData] = useState([])
  const [sortByTitleFlag, setSortByTitleFlag] = useState(false)
  const [sortByYearFlag, setSortByYearFlag] = useState(false)
  const [disableTitleSort, setDisableTitleSort] = useState(false)
  const [disableYearSort, setDisableYearSort] = useState(false)
  // handlers
  const handleOnChangeInput = (e) => {
    setSearchKeyWord(e.target.value)
    setNoRecordFound(false)
  }
  const setIntialStates = () => {
    setSearchKeyWord('')
    setMatchedRecord([])
    setPrevSortData([])
    setSortByTitleFlag(false)
    setSortByYearFlag(false)
    setDisableTitleSort(false)
    setDisableYearSort(false)
  }

  const handleOnSubmit = (e) => {
    setIsLoading(true)
    fetchKeyWordData(searchKeyWord)
    .then(data => {
      setMatchedRecord(data)
      setIsLoading(false)
      return data
    })
    .then(data => data.length < 1 ? setNoRecordFound(true) : setNoRecordFound(false))
    .then(setIntialStates())
    .then(e.preventDefault())
  }
  // fetch data
  const fetchKeyWordData = async (key) => {
    if(key === '') {
      return []
    } 
    const apiUrl = `http://openlibrary.org/search.json?q=${key}&limit=10`
    const res = await fetch(apiUrl)
    const result = await res.json()
    const docs = await result.docs
    return docs
  }
  // sort fns
  const compareFn = (a, b) => {
    if (a < b) {
      return -1
    }
    if (a > b) {
      return 1
    }
    return 0
  }
  const sortTitle = () => {
    if(!sortByTitleFlag) {
      setPrevSortData([...matchedRecord])
      const sortByTitle = matchedRecord.sort((a,b) => {
        const titleA = a.title.toUpperCase()
        const titleB = b.title.toUpperCase()
        return compareFn(titleA, titleB)
      })
      setMatchedRecord(sortByTitle)
      setSortByTitleFlag(true)
      setDisableYearSort(true)
    }else {
      setMatchedRecord(prevSortData)
      setSortByTitleFlag(false)
      setDisableYearSort(false)
    }
  }
  const sortPublishYear = () => {
    if(!sortByYearFlag) {
      setPrevSortData([...matchedRecord])
      const sortByPublishYear = matchedRecord.sort((a, b) => {
        const yearA = a.first_publish_year
        const yearB = b.first_publish_year
        return compareFn(yearB, yearA)
      })
      setMatchedRecord(sortByPublishYear)
      setSortByYearFlag(true)
      setDisableTitleSort(true)
    }else{
      setMatchedRecord(prevSortData)
      setSortByYearFlag(false)
      setDisableTitleSort(false)
    }
    
  }

  return (
    <div className="App">
      <header>
        <Search 
          searchKeyWord={searchKeyWord}
          handleOnChangeInput={handleOnChangeInput}
          handleOnSubmit={handleOnSubmit}
        />
      </header>
      
      <main>
        <List 
          isloading={isloading}
          matchedRecord={matchedRecord}
          disableTitleSort={disableTitleSort}
          disableYearSort={disableYearSort}
          noRecordFound={noRecordFound}
          sortTitle={sortTitle}
          sortPublishYear={sortPublishYear}
        />
      </main>

      <footer>
        Copyrights By Shubham Kalia (kaliashubham12@gmail.com)
      </footer>
    </div>
  )
}

export default App
