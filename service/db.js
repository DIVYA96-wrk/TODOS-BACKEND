const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todoapp', { useNewUrlParser: true, useUnifiedTopology: true });

const Todo = mongoose.model('Todo',
    { 
        
        alltodo:Array,
        Completed:Array
    })

    module.exports={Todo}