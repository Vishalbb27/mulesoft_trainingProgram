const { executionAsyncResource } = require("async_hooks");
const readline = require("readline");
const sqlite3 = require("sqlite3");
var sql;


function execution() {
  sql = "SELECT * FROM MOVIE WHERE m_name = ?";
  db.all(sql, [global.userInput], (err, rows) => {
    if (err) return console.error(err.message);
    console.log("Data selected successfully");
    rows.forEach((row) => {
      console.log(row);
    });
  });
}
function readLine() {
  // create interface for input and output
  global.rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // create empty user input
  global.userInput = "";

  // question user to enter name
  global.rl.question("Enter your favourite Movie Name : \n", function (string) {
    global.userInput = string;

    console.log("Your name is " + global.userInput);
if (global.userInput != "") execution();
    // close input stream
    global.rl.close();
  });
  
}

function queries() {
  sql = 'SELECT * FROM MOVIE';
    db.all(sql, [], (err, rows) => {
    if (err) return console.error(err.message+" select data");
        console.log('Data selected successfully');
        rows.forEach((row) => {
          console.log(row);
        });
    });
  readLine();
}



function insert() {
  // insert data
  sql =
    "INSERT INTO MOVIE(m_name, m_actor, m_actress, m_year, m_director) VALUES(?, ?, ?, ?, ?)";
  db.run(
    sql,
    [
      "The Shawshank Redemption",
      "Frank Darabont",
      "Morgan Freeman",
      1994,
      "Frank Darabont",
    ],
    (err) => {
      if (err) return console.error(err.message + " insert data");
      console.log("Data inserted successfully");
    }
  );
  
  sql =
    "INSERT INTO MOVIE(m_name, m_actor, m_actress, m_year, m_director) VALUES(?, ?, ?, ?, ?)";
  db.run(
    sql,
    [
      "DARLING in the FRANXX",
      "Yoshifumi Kondou",
      "Rina Hoshizora",
      2019,
      "Yoshifumi Kondou",
    ],
    (err) => {
      if (err) return console.error(err.message + " insert data");
      console.log("Data inserted successfully");
    }
  );
  sql =
    "INSERT INTO MOVIE(m_name, m_actor, m_actress, m_year, m_director) VALUES(?, ?, ?, ?, ?)";
  db.run(
    sql,
    ["CAPTAIN MARVEL", "Chris Evans", "Chris Pratt", 2019, "Anthony Russo"],
    (err) => {
      if (err) return console.error(err.message + " insert data");
      console.log("Data inserted successfully");
    }
  );
  sql =
    "INSERT INTO MOVIE(m_name, m_actor, m_actress, m_year, m_director) VALUES(?, ?, ?, ?, ?)";
  db.run(
    sql,
    [
      "quarantine",
      "Samuel L. Jackson",
      "Katherine Langford",
      2019,
      "David Leitch",
    ],
    (err) => {
      if (err) return console.error(err.message + " insert data");
      console.log("Data inserted successfully");
    }
  );
  sql =
    "INSERT INTO MOVIE(m_name, m_actor, m_actress, m_year, m_director) VALUES(?, ?, ?, ?, ?)";

  db.run(
    sql,
    ["The Lion King", "Jon Favreau", "Nala", 2019, "Jon Favreau"],
    (err) => {
      if (err) return console.error(err.message + " insert data");
      console.log("Data inserted successfully");
    }
  );
  queries();
}

// create database
const db = new sqlite3.Database("./movie.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message + " database create");
  console.log("Connected to the movie database.");
  
});

// create table
sql =
  "CREATE TABLE MOVIE(id INTEGER PRIMARY KEY AUTOINCREMENT, m_name TEXT, m_actor TEXT, m_actress TEXT, m_year INTEGER, m_director TEXT)";
db.run(sql, (err) => {
  if (err) return console.error(err.message + " create table");
  console.log("Table created successfully");
  insert();
});
