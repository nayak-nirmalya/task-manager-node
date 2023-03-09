const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
require("dotenv").config();

const PORT = 3000;

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is Listening on Port: ${PORT}...`));
  } catch (error) {
    console.error(`Error Occured: ${error}`);
  }
};

start();
