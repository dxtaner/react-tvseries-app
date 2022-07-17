import React from 'react';
import { useState, useEffect } from 'react'

const App =() => {

    const [tvSeries, setTvSeries] = useState(null)
    const fetchData = async () =>{

        const response = await fetch('/.netlify/functions/setTvSeries')
        const responseBody = await response.json()
        setTvSeries(responseBody.data.tvseries_data.values)
      }
    
      useEffect(() => {
        fetchData()
      }, [])
    
      console.log(tvSeries)

}

export default App;