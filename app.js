require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

const PORT = 3000;

// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Task Manger App.");
});

app.use("/api/v1/tasks", tasks);

app.listen(PORT, console.log(`Server is Listening on Port: ${PORT}...`));
