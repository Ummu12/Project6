const express= require ("express")
const cors= require("cors")

const app=express()
app.use(cors())

app.get("/",(req,res)=>{

    res.send("API is running")
})

app.get("/dept",(req,res)=>{
    res.send(["Account","Finance","HR"])

})

app.get("/categories",(req,res)=>{
 res.send(["Survey","Digital Marketing","Influncer MArketing","B2B","B2C","F2F interviwe","Polls"])


})

app.listen(3030,()=>{
    console.log("Server is running on 3030..")
})
