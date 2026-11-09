const express = require("express");
const app = express();
const tasksModel = require("./models/tasks.model");
app.use(express.json());

// const allTasks = [];

app.post("/tasks", async (req, res) => {
  try {
    console.log("Incoming Data:", req.body);

    const task = await tasksModel.create(req.body);

    console.log("Saved Task:", task);

    res.status(201).json({
      message: "Task created successfully",
      task: task,
    });
  } catch (error) {
    console.log("POST ERROR:", error.message);

    res.status(500).json({
      message: "Error creating task",
      error: error.message,
    });
  }
});
app.get("/tasks", async (req, res) => {
  // const data = req.body

  try {
    const tasks = await tasksModel.find();
    // allTasks.push(tasks);
    // OR to Find One Task
    // const findOneTask = await tasksModel.findOne({
    //   title: data.title,
    // });

    // if (!findOneTask) {
    //   return res.status(404).json({
    //     message: "Task not found",
    //   });
    // }
    res.status(200).json({
      message: "Tasks retrieved successfully",
      tasks: tasks,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

// console.log(allTasks);

app.delete("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const task = await tasksModel.findOneAndDelete({
      _id: id,
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting task",
      error: error.message,
    });
  }
});

app.patch("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const updatedTask = await tasksModel.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedTask) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json({
      message: "Task updated successfully",
      task: updatedTask,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating task",
      error: error.message,
    });
  }
});

module.exports = app;
