// Define an initial state for the todo list
const initialState = [
  {
    id: 1,
    task: "Learn JavaScript",
    complete: false,
  },
  {
    id: 2,
    task: "Build a project",
    complete: false,
  },
  {
    id: 3,
    task: "Test the application",
    complete: true,
  },
];

// Define a reducer function for managing the todo list
function todoReducer(state, action) {
  switch (action.type) {
    case "DO_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case "UNDO_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
}

// Example usage
let currentTodoList = initialState;

console.log("Initial Todo List:");
console.log(currentTodoList);

// Action: Mark the first task as complete
currentTodoList = todoReducer(currentTodoList, { type: "DO_TODO", id: 1 });
console.log("Todo List after marking task as complete:");
console.log(currentTodoList);

// Action: Undo the completion of the first task
currentTodoList = todoReducer(currentTodoList, { type: "UNDO_TODO", id: 1 });
console.log("Todo List after undoing task completion:");
console.log(currentTodoList);
