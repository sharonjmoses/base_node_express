const express = require('express')


const route = express.Router();




route.get('/test', function (req, res) {
    res.send('Hello World')
  })


function add(a,b){
    const arrayb = [1,2,3,4,5,6,7,8,9,10]
    return(a+b)
}

function verify(a){
    const arrayb = [1,2,3,4,5,6,7,8,9,10]

    const lenArray = arrayb.length;

    for(let i =0; i <lenArray; i++){
        console.log(arrayb[i])
        if(a === arrayb[i]){
            return 'Exist in the Array'
        }
    }
    return 'Not in the Array'

}

route.get('/add', function(req, res){
   

    const a = parseInt(req.query.a, 10)
    const b = parseInt(req.query.b, 10)

    // console.log()

    const value = add(a, b)
    
    res.status(200).json({
        message: value,
        status: "Success"
    })
})

route.get('/exist', function(req, res){

    const a = parseInt(req.query.a, 10)

    const value = verify(a)

    console.log(value)
    res.status(200).json({
        message: value,
        status: "Success"
    })
})

module.exports = route;