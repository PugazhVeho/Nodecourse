
    const path = require('path')
    const express = require('express')
    const app = express()
    const hbs = require('hbs')
    const getweather = require('../utils/geoweather')

    const getweatherll = require('../utils/getweatherll')

    const port = process.env.PORT || 3000

    /*app.get('',(req,res)=>{

    res.send("<h1>hello world1<h1>")

    })*/ 

    const pathofindexhtml = path.join(__dirname,'../public') 

    const pathofview = path.join(__dirname,'../views')
    const pathofpartials = path.join(__dirname,'../partials')

   // app.use(express.static(pathofindexhtml))
//app.set('views',path.join(__dirname,'../view')
    app.set('view engine','hbs')
    app.set('views',pathofview)
    hbs.registerPartials(pathofpartials)
    app.get('',(req, res)=>{

        res.render('index',{

            title:'weather app',
            name: 'pugal'


        })


    })

    app.get('/help',(req,res)=>{

        res.render('help',{

            title:'help page',
            name: 'pugal'


        })

    })

    app.get('/about',(req,res)=>{

        res.render('about',{

            title:'about page',
            name: 'pugal'


        })

    })

    app.get('/weather',(req,res)=>{

        if(!req.query.address){

            return res.send({

                error: 'you must provide the address'

            })


        }
        getweather(req.query.address,(error, {lat,lon}={})=>{
            if(error){

                return res.send("error during data search")
            }
            getweatherll(lat,lon,(error, data1)=>{
                if(error){

                    return res.send("error during data search")
                }
              console.log("Data "+lat+" data "+lon)
              console.log("Data "+ JSON.stringify(data1))

              res.send({

                lat,
                lon,
                region: data1.region,
                country: data1.country
                

              })
              })
          
          })
        /*res.send({

            forecast: "its snowing",
            location:  "Boston",
            address:  req.query.address
        })*/

    }) 

    app.listen(port,()=>{

    console.log("server is up and running")

    })