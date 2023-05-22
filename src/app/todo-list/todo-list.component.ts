import { Component } from '@angular/core';
import { Todo } from '../todo';
import { Pipe, PipeTransform } from '@angular/core'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  todos: Todo[] = [
    { task: 'Washed dishes', completed: false },
    { task: 'Cooked meal', completed: true },
    { task: 'Paid bills', completed: false },
    { task: 'Cleaned the house', completed: false },
    { task: 'Went out for a walk', completed: true },
    { task: 'Watched TV', completed: false }
  ];

  filteredTodos: Todo[] = [];
  filterText: string = '';
  newTask: string = '';

  ngOnInit() {
    this.applyFilter();
  }

  applyFilter() {
    this.filteredTodos = this.todos.filter(todo =>
      todo.task.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      this.todos.push({ task: this.newTask, completed: false });
      this.newTask = '';
      this.applyFilter(); // Apply filter after adding a new task
    }
  }

  removeTask(index: number) {
    this.todos.splice(index, 1);
    this.applyFilter(); // Apply filter after removing a task
  }

  toggleComplete(todo: Todo) {
    todo.completed = !todo.completed;
  }

  isListEmpty() {
    return this.filteredTodos.length === 0 || this.filteredTodos.every(todo => todo.completed);
  }

  editTask(todo: Todo) {
    todo.task = todo.task.trim(); // Trim whitespace from the task
  }

  saveTask(todo: Todo) {
    todo.task = todo.task.trim(); // Trim whitespace from the task
    this.applyFilter(); // Apply filter after saving the task
  }
}
