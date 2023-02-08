USE employeesDB;

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Manager", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 95000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Junior Software Engineer", 75000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Investment Analyst", 95000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Consultant", 200000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jane", "Doe", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Adam", "Stovall", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dylan", "Crowell", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kanani", "Jiang", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Eric", "Crassanissi", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "McMannus", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Aubrey", "Grahm", 1, 3);