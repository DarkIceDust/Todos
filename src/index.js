


import './styles.css';

import { Todo, TodoList }  from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

// console.log( todoList.todos );

todoList.todos.forEach( crearTodoHtml );

// const newTodo = new Todo ('Aprender Javascript');
// todoList.nuevoTodo (newTodo);

todoList.todos[0].imprimirClase();

console.log( 'todos', todoList.todos );
// Lo de arriba es lo mismo que: todoList.todos.forEach( todo => crearTodoHtml ( todo ));


// const tarea = new Todo('Aprender JavaScript!!');

// todoList.nuevoTodo( tarea );   

// console.log(todoList);

// // tarea.completado = true;

// crearTodoHtml ( tarea );


// localStorage.setItem('mi-key', 'ABC123');
// sessionStorage.setItem('mi-key', 'ABC123');

// setTimeout( () => {
    
//     localStorage.removeItem('mi-key');

// }, 1500);