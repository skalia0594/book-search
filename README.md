# front-end-bmo-assessment
front-end bmo assessment

# 1.	How long did you spend on the coding assignment? 
    1 day working hours 

# a.	What would you add to your solution if you had more time?
    There are couple of thing want to add on if gets more time some are as folllow:
    i. This app is using the react hooks useState function which I would prefer to use redux for state managementt as of considering the scalability of the app.
    ii. Right now calling the Api is for the limit number of records say 10 record on a search of book, which will do it more optimizing and include pagination to           get all of the records but show in pagination style.
    
# b.	If you didn't spend much time on the coding test, then use this as an opportunity to explain what you would add.
      Spend as much time as I get on the assessment and tried to cover all of the requirements as mentioned in the assessment
# 2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
    i. Used the asyn await calling open API response
        //API Call
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
    ii. Used react Functional components
    iii. Used React hooks functions.
        // states
      const [searchKeyWord, setSearchKeyWord] = useState('')
      const [matchedRecord, setMatchedRecord] = useState([])

# 3.	How would you track down a performance issue in production? Have you ever had to do this?
        With my current firm we use the New Relic/ Kibana for tracking and for analytics we use the Adobe Analytics to our web pages to track the visitor. 
# 4.	How would you improve the API that you just used?
        Already using it with the limit parameter with static value in the API, will try to make that limit parameter to be dynamic with number of records so as to         handle on the UI side with the pagination.
# 5.	Please describe yourself using correctly formatted JSON.
    {
      "name": "Shubham",
      "lastname": "Kalia",
      "age": 27,
      "nationality": "Indian",
      "location": "Toronto",
      "hobbies": [
        "Coding",
        "Singing",
        "Binge watching Movies"
      ],
      "occupations": [
        "Software Developer",
        "Ful Stack Developer",
        "Software Engineer"
      ],
      "dreams": [
        "To make this world a better place!"
      ],
      "believes": [
        "One life!"
      ]
    }
