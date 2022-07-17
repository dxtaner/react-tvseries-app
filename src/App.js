import React from 'react';
import { useState, useEffect } from 'react'
const App =() => {

  const [tvSeries, setTvSeries] = useState(null)

  const fetchData = async () =>{

    const response = await fetch('/.netlify/functions/setTvSeries')
    const responseBody = await response.json()
    setTvSeries(responseBody.data.hotel_data.values)
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(tvSeries)

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
