import { bindActionCreators, createStore, combineReducers } from "redux";

const ADD_TODO = "add_todo";
const DELETE_TODO = "delete_todo";
const ADD_USER = "add_user"
function todoReducer(state, action) {
  if (action.type == ADD_TODO) {
    const todoText = action.payload.todoText;
    return [
      ...state,
      {
        text: todoText,
        isFinished: false,
        id: state.length === 0 ? 1 : state[state.length - 1].id + 1,
      },
    ];
  } else if (action.type == DELETE_TODO) {
    const todo = action.payload.todo;
    return state.filter((t) => t.id != todo.id);
  } else if (action.type == "edit_todo") {
    const todo = action.payload.todo;
    const todoText = action.payload.todoText;
    return state.map((t) => {
      if (t.id == todo.id) {
        t.text = todoText;
      }
      return t;
    });
  }
  return state;
}

function userReducer(state = [] , action){
    if(action.type == ADD_USER){
        const userName = action.payload.userName;
        return [
            ...state,
            {name: userName , id :(state.length == 0) ? 1 : state[state.length - 1].id + 1}
        ]
    }
}


const response = createStore(todoReducer, []);

console.log(response.getState());

const addTodo = (todoText) => ({
  type: ADD_TODO,
  payload: { todoText: todoText },
});
const deleteTodo = (id) => ({ type: DELETE_TODO, payload: { todoId: id } });
const addUser = (name) => ({type:ADD_USER , payload: {userName: name}})


const reducer = combineReducers({todo: todoReducer , user: userReducer})


const { dispatch, subscribe, getState, replaceReducer } = createStore(
  todoReducer,
  []
);
subscribe(() => console.log(getState()));

const {actions} = bindActionCreators({addTodo , deleteTodo},dispatch)

dispatch();
console.log(getState());

dispatch(addTodo('todo 1'));
dispatch(addTodo('todo 2'));
dispatch(deleteTodo(1));

//bindActionCreators
actions.addTodo('todo 1')
actions.addUser("user 1")
