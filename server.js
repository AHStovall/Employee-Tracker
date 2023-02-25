const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'Nc*287309$',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);



function homePage() {
  inquirer
    .prompt({
      type: "list",
      choices: [
        "Add Department",
        "Add Role",
        "Add Employee",
        "View Employees",
        "View Department",
        "Quit"
      ],
      message: "Please select an option.",
      name: "choice"
    })
    .then(function (result) {
      console.log("You entered: " + result.choice);

      switch (result.choice) {
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "View Employees":
          viewEmployees();
          break;
        case "View Departments":
          viewDepartment();
          break;
        default:
          // homePage();
          quit();
      }
    });
}

function addDepartment() {
  inquirer.prompt({
    type: "input",
    message: "What is the name of the department you would like to add?",
    name: "deptName"
  }).then(function (response) {
    db.query("INSERT INTO department (name) VALUES (?)", [response.deptName], function (err, res) {
      if (err) throw err;
      console.log(res)
      return homePage();
    })
  })
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the name of the role?",
        name: "roleName"
      },
      {
        type: "input",
        message: "What is the salary for this role?",
        name: "salary"
      },
      {
        type: "input",
        message: "What is the department id number?",
        name: "deptId"
      }
    ]).then(function (response) {
      db.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [response.roleName, response.salary, response.deptId], function (err, res) {
        console.log(res);
        return homePage();
      })
    })
};

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the employee's first name?",
        name: "first_name"
      },
      {
        type: "input",
        message: "What is the employee's last name?",
        name: "last_name"
      },
      {
        type: "input",
        message: "What is the employee's role ID number?",
        name: "role_id"
      },
      {
        type: "input",
        message: "What is their manager's ID number?",
        name: "manager_id"
      }
    ]).then(function (response) {
      db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [response.first_name, response.last_name, response.role_id, response.manager_id], function (err, res) {
        console.log(res);
        return homePage();
      })
    })
}

function viewEmployees() {
  let request = "SELECT * FROM employee";
  db.query(request, function (err, res) {
    console.log(res);
    return homePage();
  });
}

function viewDepartment() {
  let request = "SELECT department.deptName AS department FROM department";
  db.query(request, function (err, res) {
    console.log(res);
    return homePage();
  });
}

function quit() {
  console.log('Thank you. Goodbye.')
  process.exit();
}

homePage();