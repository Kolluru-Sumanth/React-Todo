const express=require("express");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db");
const app=express();
const cors=require("cors");
app.use(express.json());
app.use(cors({}));
app.post("/Todo",async (req,res)=>{
    const createPayload= req.body;
    const parsePayload=createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"invalid inputs"
        })
        return
    } 
    await Todo.create({
        title : parsePayload.data.title,
        description : parsePayload.data.description,
        completed: false
    })
    res.json({
        msg:"Todo created"
    })
})

app.get("/Todos",async(req,res)=>{
    const todoList= await Todo.find({});
    res.json(todoList)

})

app.put("/Completed",async (req,res)=>{
    const updatePayload=req.body;
    const parsePayload=updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(400).json({
            msg:"invalid inputs"
        });
        return
    }
    await Todo.updateOne({
        _id: req.body._id
    },{
        completed: true
    })
    res.json({
        msg:"Todo marked as done"
    })
})
app.listen(3000,()=>{
    console.log("port is running in 3000");
});