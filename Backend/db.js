const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://kollurusumanth004:Cluster012345@cluster0.6znizvg.mongodb.net/");

const todoSchema= new mongoose.Schema({
    title: String,
    description: String,
    completed:{
        type: Boolean,
        default: false
    }
});

const Todo=mongoose.model("Todo",todoSchema);
module.exports={
    Todo
}