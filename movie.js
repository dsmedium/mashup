const request = require('request');

const apiURL = "http://www.omdbapi.com/?t=";
let t = encodeURI('the godfather');
const key = '&apikey=ec157bc9'

const url = `${apiURL}${t}${key}`;


request.get(url,(err,res,body)=>{
    if(err){
        console.log(err)
    }
    else{
        result = JSON.parse(body)
        console.log(result)
    }
})
