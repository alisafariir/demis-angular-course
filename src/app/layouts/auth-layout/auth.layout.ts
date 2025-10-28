import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-auth-layout',
    templateUrl: './auth.layout.html',
    imports: [RouterOutlet],
})
export class AuthComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
