const mongoose=require("mongoose");
mongoose.connect(mongoUrl);

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