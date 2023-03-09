const connectionString =
  "mongodb+srv://nirmalya:nirmalya@cluster.a9tjk7u.mongodb.net/task-manager";

const mongoose = require("mongoose");

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`Connected to DB.`))
  .catch((err) =>
    console.error(`Error Occured while Connecting to DB: ${err}`)
  );
