# Lesson 3: Data Models, Relationships, and Schemas

In the final week, students will learn how to use NodeJS to interact with a MySQL database. MongoDB, as an example of a non-relational database, will also be introduced, as well as the benefits and drawbacks of relational and non-relational models.

Objective: Students will have a basic understanding of database usage in a web application, including parameter validation, escaping, and prepared statements. Students should also be able to compare and contrast relational (like MySQL) and NoSQL databases (considering their benefits and drawbacks).


## Pre-Class Readings

Also, please read the following pages that explains the ACID database model and connecting to MySQL from node.
- [The ACID Database Model](https://www.thoughtco.com/the-acid-model-1019731)
- [Node MySQL Documentation on Github](https://github.com/mysqljs/mysql)


## Main Topics

- Security
    - SQL Injection
    - User GRANTS
- Connecting to MySQL from node
- Writing SQL in your node application
    - Raw SQL strings
    - Parameter validation
    - Escaping
    - Prepared statements
- Introduction to non-relational data with MongoDB
    - MongoDB vs. SQL
    - Create/Drop database
    - Insert/Update/Delete data
    - Query data
    - Relationships: embedded vs. referenced
    - Replication and sharding
    - Atomicity


## Reference Material

- [OWASP on SQL Injection](https://www.owasp.org/index.php/SQL_injection)
- [Parameter Validation on Wikipedia](https://en.wikipedia.org/wiki/Parameter_validation)
- [Node MySQL Escaping Query Values](https://github.com/mysqljs/mysql#escaping-query-values)
- [Node MySQL Preparing Queries (automatic escaping)](https://github.com/mysqljs/mysql#preparing-queries)
- [MySQL SHOW GRANTS](https://dev.mysql.com/doc/refman/5.7/en/show-grants.html)


## Homework

- Complete the `homework.js` script so that you have a functional node application. In particular, add the necessary code to the functions:
    - `addNewTask`, to add a new task
    - `changeTaskTitle`, to change the title of a task
    - `changeTaskDueDate`, to change the due date of a task
    - `changeTaskStatus`, to change the status of a task
    - `markTaskAsCompleted`, to mark a task as completed
    - `deleteTask`, to delete a task
    - `deleteUser`, to delete a user
- Create a new database containing the following tables:
    - **Class**: with the columns: id, name, begins (date), ends (date)
    - **Student**: with the columns: id, name, email, phone, class_id (foreign key)
- If you are done with the above tasks, you can continue with these advanced tasks:
    - Create an index on the name column of the student table.
    - Add a new column to the class table named **status** which can only have the following values: not-started, ongoing, finished (hint: enumerations).
