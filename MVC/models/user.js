const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    id: String,
    name: String,
    age: Number
})
module.exports = mongoose.model('User', userSchema);


// module.exports = class User{
//     constructor(name, age){
//         this.name = name; 
//         this.age = age;
//     }
//     save(){
//         users.push(this);
//     }
//     static getAll(){
//         return users;
//     }
// };