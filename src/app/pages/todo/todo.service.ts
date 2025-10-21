import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {

    http = inject(HttpClient)

    getTodoList() {
        return this.http.get("https://jsonplaceholder.typicode.com/todos")
    }

    getMessageOfTheDay(): Observable<string> {
        return new Observable((observer) => {
            observer.next('Hello 👋');
            observer.next('Just do it. ✔️');

            observer.complete();
        });
    }
}