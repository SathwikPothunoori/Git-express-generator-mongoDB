const express =require('express')
const mongoClient =require('mongodb').MongoClient
const assert =require('assert')
const dboper = require('./operations');

// address of the database
const url = 'mongodb://localhost:27017/'

const dbname ='Student'

// connecting to database server
mongoClient.connect(url , (err , client)=>{

    assert.equal(err,null)

    console.log('connected properly to the server')

    const db = client.db(dbname)  // accesing  a database



    dboper.insertDocument(db ,{name:"sai" ,roll:"107"} , "it" ,(result)=>{
        console.log("Inserted document \n ",result.ops)

        dboper.findDocument(db , "it" ,(docs)=>{
            console.log("Found \n" , docs)

            dboper.updateDocument(db ,{name:"sai"} ,{name:"saiTeja"} ,"it" , (result)=>{
                console.log("Updated Document \n" , result.result);//updated doc is here result.result

                dboper.findDocument(db , "it" ,(docs)=>{
                    console.log("Found Updated \n" , docs)

                    db.dropCollection("it",(result)=>{
                        console.log("Dropped collection :\n"  , result);

                        client.close();
                    })
                })
            })
        })
    }) 


    // collection.insertOne({"name":"sai" ,"roll":"107"} , (err , result)=>{
    //     assert.equal(err ,null)

    //     console.log(result.ops)

    //     collection.find({}).toArray((err , docs)=>{
    //         assert.equal(err ,null)
            
    //         console.log('Found:\n ')
    //         console.log(docs)

    //         //cleaning the db
    //         db.dropCollection('it' , (err , result)=>{
    //             assert.equal(err , null)

    //             client.close()
    //         })
    //     })
    // })
})