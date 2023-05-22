"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TodoListComponent = void 0;
var core_1 = require("@angular/core");
var TodoListComponent = /** @class */ (function () {
    function TodoListComponent() {
        this.todos = [
            { task: 'Washed dishes', completed: false },
            { task: 'Cooked meal', completed: true },
            { task: 'Paid bills', completed: false },
            { task: 'Cleaned the house', completed: false },
            { task: 'Went out for a walk', completed: true },
            { task: 'Watched TV', completed: false }
        ];
        this.filteredTodos = [];
        this.filterText = '';
        this.newTask = '';
    }
    TodoListComponent.prototype.ngOnInit = function () {
        this.applyFilter();
    };
    TodoListComponent.prototype.applyFilter = function () {
        var _this = this;
        this.filteredTodos = this.todos.filter(function (todo) {
            return todo.task.toLowerCase().includes(_this.filterText.toLowerCase());
        });
    };
    TodoListComponent.prototype.addTask = function () {
        if (this.newTask.trim() !== '') {
            this.todos.push({ task: this.newTask, completed: false });
            this.newTask = '';
            this.applyFilter(); // Apply filter after adding a new task
        }
    };
    TodoListComponent.prototype.removeTask = function (index) {
        this.todos.splice(index, 1);
        this.applyFilter(); // Apply filter after removing a task
    };
    TodoListComponent.prototype.toggleComplete = function (todo) {
        todo.completed = !todo.completed;
    };
    TodoListComponent.prototype.isListEmpty = function () {
        return this.filteredTodos.length === 0 || this.filteredTodos.every(function (todo) { return todo.completed; });
    };
    TodoListComponent.prototype.editTask = function (todo) {
        todo.task = todo.task.trim(); // Trim whitespace from the task
    };
    TodoListComponent.prototype.saveTask = function (todo) {
        todo.task = todo.task.trim(); // Trim whitespace from the task
        this.applyFilter(); // Apply filter after saving the task
    };
    TodoListComponent = __decorate([
        core_1.Component({
            selector: 'app-todo-list',
            templateUrl: './todo-list.component.html',
            styleUrls: ['./todo-list.component.css']
        })
    ], TodoListComponent);
    return TodoListComponent;
}());
exports.TodoListComponent = TodoListComponent;
