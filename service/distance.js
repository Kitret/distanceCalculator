"use strict";

const { response } = require('express');
var request=require('request');
const apiKey=process.env.ZIPCODE_API_KEY || "DemoOnly00gH8wbb344Ca9wRlS2B9Btt3Nqg7g6GkvvSswAhCSX2jtqxzmK8kWuM";
const zipCodeUrl="https://zipcodeapi.com/rest/";
var distance= {
    find: (req,res,next) => {
        request( zipCodeUrl+ apiKey + "/distance.json/" + req.params.zipcode1 + "/" + req.params.zipcode2 + "/mile",(error,response,body) => {
            if(!error && response.statusCode==200){
                response=JSON.parse(body);
                res.send(response);
            } else{
                console.log(response.statusCode + response.body);
                res.send({distance:-1});
            }
        });
    }
};

module.exports=distance;