const express=require('express')
const cors=require('cors')
const myqsl=require('mysql')

const app=express()
app.use(cors())
const db=myqsl.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'formpython'

    }
)

app.get('/',(re,res)=>{
    return res.json('Dessai')
})

app.get('/user',(re,res)=>{
    const myqsl="SELECT * FROM usertable"
    db.query(myqsl,(err,data)=>{
        if(err) return console.log( re.json(err))
            return res.json(data)
    })
})


app.listen(8081,()=>{
    console.log('Listening')
})