import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-master-layout',
    templateUrl: './master.layout.html',
    imports: [RouterOutlet]
})
export class MasterLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
