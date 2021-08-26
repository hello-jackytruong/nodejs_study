const mongoose = require('mongoose');

async function connect(){
    try {
        mongoose.connect('mongodb://localhost:27017/jacky_nodejs', {
            useNewUrlParser: true, useUnifiedTopology: true
        });
        console.log('connect successfully!!!');
    } catch (error) {
        console.log('connect failure!!!');
        
    }
    
}

module.exports = { connect };