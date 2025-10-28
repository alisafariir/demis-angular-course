import { Component, OnInit, signal } from '@angular/core';
import { Todo } from '../../types/todo.interface';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.html',
})
export class TodoItemComponent implements OnInit {

    todoItem = signal<Todo>({})
    constructor() { }

    ngOnInit(): void { }
}
