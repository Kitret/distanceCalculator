"use strict";

var properties=require("../package.json");
var distance=require("../service/distance");
var controllers={
    about: (req,res) => {
        var aboutInfo={
            name:properties.name,
            version:properties.version
        };
        res.json(aboutInfo);
    },
    get_distance: (req,res) => {
        distance.find(req,res,function(err,dis){
            if(err) res.send(err);
            res.send(dis);
        });
    }
};

module.exports=controllers;