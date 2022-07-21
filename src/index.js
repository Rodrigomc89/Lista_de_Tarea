import './style.css';

// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class.js';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export  const todoList = new TodoList();

todoList.todo.forEach( crearTodoHtml );

 const newTodo = new Todo('Aprender JS');
// todoList.nuevoTodo( newTodo );

 newTodo.imprimirClase();

// console.log( 'todo', todoList.todo);
