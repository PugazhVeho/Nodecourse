const { Module } = require('module')
const request = require('postman-request')

const getweatherll = (lat,lon, callback)=>{
    const url = 'http://api.weatherstack.com/forecast?access_key=64576bcd5a4d95a9c7ba282501eac0d2&query='+lat+","+lon
    console.log("url "+url)
    request({url, json: true},(error, {body})=>{
        //const data = JSON.parse(response.body)
        //console.log(response.body)
        if(error){

            callback("unable to locate the service",undefined)
        } else if(body.location==undefined){

            callback("unable to find location",undefined)
        } else {

            callback(undefined,{

                country : body.location.country,
                region : body.location.region,
            })
        }
    })

       

}

module.exports =getweatherll