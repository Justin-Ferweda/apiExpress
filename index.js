const express=require('express');
const MongoClient = require('mongodb')
const app = express();
const port = 4050;
// const breakfast = {
//     eggs: "scrambled",
//     bacon: "chewy",
//     toast: "wheat",
// }

const url = "mongodb+srv://readyplayerone:********@cluster0-ggebr.mongodb.net/meals?retryWrites=true&w=majority"
//put password in **
const dbName = "Meals"
const collection = "Breakfast"


app.get('/bacon', (req, res) => {
    MongoClient.connect(url, {useNewUrlParser: true},(err, client) => { 
             if(err)throw err 
            const db = client.db(dbName)
        db.collection(collection).find().toArray((err, result) =>{
            if(err) throw err  
            res.send(result)
        })
    })


   
    

})



app.listen(port, () => console.log(`serving breakfast at port: ${port}`));