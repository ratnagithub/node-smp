var mongoose = require('mongoose');
var studentsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    department: String,
    semester: String,
    email: {
        type: String,
        required: true
    },
    phone: Number
});
module.exports = mongoose.model('students', studentsSchema);