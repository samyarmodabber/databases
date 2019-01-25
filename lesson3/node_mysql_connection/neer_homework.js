const mysql = require('mysql');
const config = require('./config_neer.js')
const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});


const addNewTask = function(title, description, created, updated, due_date, status_id, user_id) {
  const insert = `INSERT INTO task(title, description, created, updated, due_date, status_id, user_id) 
  VALUES(?,?,?,?,?,?,?)`;
  connection.query(insert,[title, description, created, updated, due_date, status_id, user_id], function(err, result){
    if(err){
      return console.error(err.message);
    }
    console.log(result);
  });

};
addNewTask('Finish Reading Martian', 'Has been postponing', '2017-10-25 06:54:16', '2017-10-25 06:54:16', null , 2 , 1);

const changeTaskTitle = function(taskID, newTitle) {
  const sql = `UPDATE task SET title = ? WHERE id = ?`;;
  connection.query(sql, [taskID, newTitle], function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
};

changeTaskTitle("write journal", 1);

const changeTaskDueDate = function(taskID, newDueDate) {
  const sql = `UPDATE task SET due_date = ? WHERE id = ?`;;
  connection.query(sql, [taskID, newDueDate], function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
};

changeTaskDueDate('2018-05-25', 4); //don't understand why it does not assign parameters in sequence
const changeTaskStatus = function(taskID, newStatus) {
  const sql = `UPDATE task SET status_id = ? WHERE id = ?`;;
  connection.query(sql, [taskID, newStatus], function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
};
changeTaskStatus(1, 3);

const markTaskAsCompleted = function(taskID) {
  const sql = `UPDATE task SET status_id = ?`;;
  connection.query(sql, taskID, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
};
markTaskAsCompleted(3);

const deleteTask = function(taskID) {
  const sql = `DELETE FROM task WHERE id = ?`;
  connection.query(sql, taskID, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });

};
deleteTask(38);

connection.end();
