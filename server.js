const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://kostantinos:28031993@cluster0.gidbl.mongodb.net/notesDB',{useNewUrlParser:true}, {useUnifiedTopology:true});


const notesSchema = {
    title:String ,
    content:String
}


const Note = mongoose.model('Note',notesSchema);


app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/",function(req,res){
    let newNote = new Note({
        title:req.body.title ,
        content:req.body.content
    })
    newNote.save();
    res.redirect("/");
})


app.listen(3000,()=>{
    console.log('server is running!!!!')
})

