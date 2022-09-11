const express =require('express')
const mongoClient =require('mongodb').MongoClient
const assert =require('assert')

// address of the database
const url = 'mongodb://localhost:27017/'

const dbname ='Student'

// connecting to database server
mongoClient.connect(url , (err , client)=>{

    assert.equal(err,null)

    console.log('connected properly to the server')

    const db = client.db(dbname)  // accesing  a database

    const collection = db.collection('it') //it provides various different functions to use on a database

    collection.insertOne({"name":"sai" ,"roll":"107"} , (err , result)=>{
        assert.equal(err ,null)

        console.log(result.ops)

        collection.find({}).toArray((err , docs)=>{
            assert.equal(err ,null)
            
            console.log('Found:\n ')
            console.log(docs)

            //cleaning the db
            db.dropCollection('it' , (err , result)=>{
                assert.equal(err , null)

                client.close()
            })


        })
    })
})