const mongoose = require("mongoose");

const DB_PASSWORD = encodeURIComponent("TB5SHDw98zUvYmD");

mongoose.connect(`mongodb+srv://diego:${DB_PASSWORD}@apicluster.bt1y8.mongodb.net/bancodaapi?retryWrites=true&w=majority`);
mongoose.Promise = global.Promise;

module.exports = mongoose;