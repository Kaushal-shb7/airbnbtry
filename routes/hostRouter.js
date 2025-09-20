const path = require('path');
const express = require('express');
const hostrouter=express.Router();

const pathUtils=require('../utils/pathUtils');

hostrouter.get('/add-home',(req,res,next)=>{
    res.render('add-home',{
        pageTitle:'Add Home to my website'
    });
});

const registeredHomes=[];

hostrouter.post('/add-home',(req,res,next)=>{
    console.log('Home registeration successful for',req.body,req.body.houseName);
    registeredHomes.push({houseName:req.body.houseName});
    res.render('homeAdded',{
        pageTitle:'Home Added Successfully',
        houseName:req.body.houseName
    });
});

exports.registeredHomes=registeredHomes;
exports.hostrouter=hostrouter;
