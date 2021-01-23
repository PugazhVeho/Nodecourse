const { Module } = require('module')
const request = require('postman-request')

const getweather = (location, callback)=>{
    const url = 'http://api.weatherstack.com/forecast?access_key=64576bcd5a4d95a9c7ba282501eac0d2&query='+location
    //console.log("url "+url)
    request({url, json: true},(error, {body})=>{
        //const data = JSON.parse(response.body)
       // console.log(response.body)
        if(error){

            callback("unable to locate the service",undefined)
        } else if(body.location==undefined){

            callback("unable to find location",undefined)
        } else {

            callback(undefined,{

                minTemp : body.current.temperature,
                maxtemp : body.current.humidity,
                lat : body.location.lat,
                lon : body.location.lon

            })
        }
    })

       

}

module.exports =getweather