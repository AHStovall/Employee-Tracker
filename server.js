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
            "View Employee by Department",
            "Update Employee Roles",
            "Quit"
        ],
        message: "Please select an option.",
        name: "choice"
    })
    .then(function(result){
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
            case "View Employee by Department":
                viewEmployeeDepartment();
                break;
            default:
                quit();
        }
    });
}

function addDepartment() {
    inquirer.prompt({
        type: "input",
        message: "What is the name of the department you would like to add?",
        name: "deptName"
    }).then(function(response){
        db.query(`INSERT INTO department (name) VALUES , (${response.deptName});`, function(err, res){
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
    ]).then(function(response){
        db.query(`INSERT INTO department (title, salary, department_id) VALUES (${response.roleName}, ${response.salary}, ${response.deptId});`, function(err, res){
            if (err) throw err;
            console.log(res);
            return homePage();
        })
    })
};
        
    
function updateEmployee() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Which employee would you like to update?",
          name: "employeeUpdate"
        },
        {
          type: "input",
          message: "What do you want to update to?",
          name: "updateRole"
        }
      ])
      .then(function(response) {
        db.query(`UPDATE employee SET role_id = ${response.updateRole} WHERE first_name = ${response.employeeUpdate}`, function (err, res){
            if (err) throw err;
            console.log(res);
            return homePage();
        })
    })
};

function viewEmployeeDepartment() {
  inquirer
  .prompt([
    {
      type: "list",
      choices: [
        "Sales",
        "Engineering",
        "Finance",
        "Legal",
        "Quit"
      ],
      message: "Please select an option.",
      name: "choice"
    }.then(function(result){
      console.log("You entered: " + result.choice);
      let request = "SELECT employee FROM ";
      switch (result.choice) {
          case "Sales":
            db.query(request + "Sales", function(err, res){
              if (err) throw err;
              console.log(res);
              homePage();
            } );
              break;
          case "Engineering":
            db.query(request + "Engineering", function(err, res){
              if (err) throw err;
              console.log(res);
              homePage();
            } );
              break;
          case "Finance":
              db.query(request + "Finance", function(err, res){
                if (err) throw err;
                console.log(res);
                homePage();
              } );
              break;
          case "Legal":
              db.query(request + "Legal", function(err, res){
                if (err) throw err;
                console.log(res);
                homePage();
              } );
              break;
          default:
              homePage();
      }}
      )
    ])    
};

function quit() {
  connection.end();
  process.exit();
}