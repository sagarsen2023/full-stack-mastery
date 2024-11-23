const fs = require("fs");

const sampleFile = "./sampleTodo.json";

const loadTodo = () => {
  try {
    const dataBuffer = fs.readFileSync(sampleFile); // This will return a buffer as an object
    // If we convert a buffer object to a string, it will return a JSON string
    const dataJSON = dataBuffer.toString(); // This will convert the buffer object to a string
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveTodo = (todos) => {
  fs.writeFileSync(sampleFile, JSON.stringify(todos));
};

const addTodo = (userArguments) => {
  const todos = loadTodo();
  todos.push({ todo: userArguments });
  saveTodo(todos);
  console.log("Todo added successfully");
};

const listTodo = () => {
  const todos = loadTodo();
  console.log("Your Todos : ");
  todos.forEach((todo, index) => {
    console.log(`${index + 1}. ${todo.todo}`);
  });
};

const deleteTodo = (userArguments) => {
  const todos = loadTodo();
  const newTodos = todos.filter((todo) => todo.todo !== userArguments);
  if (todos.length === newTodos.length) {
    console.log("No todo found");
  } else {
    saveTodo(newTodos);
    console.log("Todo deleted successfully");
  }
};

// process.argv is an array containing the command line arguments
// The command you entered in the terminal is : node index.js command "data"
// At process.argv[0] : node
// At process.argv[1] : index.js
// At process.argv[2] : command
// At process.argv[3] : data
// All the arguments are strings

const command = process.argv[2];
const userArguments = process.argv[3];
console.log("Command : ", command);
console.log("User Arguments : ", userArguments);

if (command === "add") {
  addTodo(userArguments);
} else if (command === "list") {
  listTodo();
} else if (command === "delete") {
  deleteTodo(userArguments);
} else {
  console.log("Invalid command");
}
