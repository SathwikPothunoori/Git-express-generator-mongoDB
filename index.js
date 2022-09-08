const express =require('express')
const mongoClient =require('mongodb').MongoClient
const assert =require('assert')

const url = 'mongodb://localhost:27017/'

const dbname ='conFusion'

mongoClient.connect(url , (err , client)=>{

    assert.equal(err,null)
    

})