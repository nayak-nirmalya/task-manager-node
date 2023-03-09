const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

const PORT = 3000;

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Task Manger App.");
});

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is Listening on Port: ${PORT}...`));
  } catch (error) {
    console.error(`Error Occured: ${error}`);
  }
};

start();
