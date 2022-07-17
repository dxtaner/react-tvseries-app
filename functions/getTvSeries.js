const fetch = require("node-fetch");

exports.handler = async function(event){
    const query = `
        query {
            tvseries_data {
            values {
                id
                name
                rating
            }
            }
        }
    `

    const url = process.env.ENDPOINT
    const options = {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "x-cassandra-token": process.env.ASTRA_TOKEN
        },
        body: JSON.stringify({query})
    }

    const response = await fetch(url,options)


    try{
        const responseBody = await response.json();
        return{
            statuscod:200,
            body:JSON.stringify(responseBody)
        }

    }
    catch(e){
        console.log(e)
        return{
            statuscode:500,
            body:JSON.stringify(e)
        }
    }

}