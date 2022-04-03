/***
 * 2Do app
 * v 1.2
 * 3-4-2022
 */

/*==================================
    Require External Modules
==================================*/
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
/*=======================================
    create express app and use Modules
=======================================*/
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

/*=============================
    Global Variables
=============================*/
let todoList = [];
let todoWorkList = [];

/*=============================
    Handle Get from Root
=============================*/
app.get("/", function (req, res) {
  let todayDate = date.getDate();
  res.render("lists", { listTitle: todayDate, todoItems: todoList });
});

/*=============================
    Handle Get from /work
=============================*/
app.get("/work", function (req, res) {
  res.render("lists", { listTitle: "Work List", todoItems: todoWorkList });
});

/*=============================
    Handle Get from /about
=============================*/
app.get("/about", function (req, res) {
  res.render("about");
});

/*=============================
    Handle Post from Root
=============================*/
app.post("/", function (req, res) {
  let todoItem = req.body.todoItem;
  if (req.body.list == "Work") {
    todoWorkList.push(todoItem);
    res.redirect("/work");
  } else {
    todoList.push(todoItem);
    res.redirect("/");
  }
});

/*=============================
    Run server on port 3000
=============================*/
app.listen(3000, function () {
  console.log("Server running on port 3000");
});
