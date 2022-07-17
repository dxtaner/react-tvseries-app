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

    return (
        <div className="App">
            <h1>My Series</h1>
                {tvSeries?.map(tvSeries => (
                <div className="series">
                    <h2>{tvSeries.name}</h2>
                    <p>{tvSeries.rating}</p>
                </div>
        ))}
        </div>
    );
}
export default App;