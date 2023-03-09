const connectionString =
  "mongodb+srv://nirmalya:nirmalya@cluster.a9tjk7u.mongodb.net/task-manager";

const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};

module.exports = connectDB;
