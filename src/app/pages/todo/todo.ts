import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from './todo.service';
import { MatListModule } from '@angular/material/list';
import {
    MatSnackBar,
    MatSnackBarAction,
    MatSnackBarActions,
    MatSnackBarLabel,
    MatSnackBarRef,
} from '@angular/material/snack-bar';
import { Todo } from '../../types/todo.interface';
@Component({
    selector: 'app-todo',
    templateUrl: './todo.html',
    providers: [TodoService],
    imports: [MatListModule]

})
export class TodoComponent {
    message = signal<string[]>([])
    todoService = inject(TodoService)
    todoList = signal<Todo[]>([])
    private _snackBar = inject(MatSnackBar);

    constructor() {
        this.todoService.getMessageOfTheDay().subscribe({
            next: (value) => {
                this.message.update((prevValues) => {
                    return [...prevValues, value];
                })
            },
            error: (err) => { },
            complete: () => { }
        })


    }

    ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this.todoService.getTodoList().subscribe({
            next: (value: any) => {
                this.todoList.update((prevValues) => {
                    return [...prevValues, ...value];
                })
            },
            error: (err) => {
                console.log(err);

            }
        })
    }
}
