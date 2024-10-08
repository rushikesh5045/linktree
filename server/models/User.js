const mongoose = require('mongoose');
const bcrypt= require('bcryptjs');

const UserSchema = new mongoose.Schema({
    username:{required: true,type : String,unique : true},
    email:{required: true,type : String,unique : true},
    password:{required: true,type : String}
});

UserSchema.pre('save',async function(next){
    if(!this.isModified('password')){return next();}
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const User = mongoose.model('User', UserSchema);
module.exports = User;