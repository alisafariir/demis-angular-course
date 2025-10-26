import { Component, ElementRef, input, OnInit, viewChild } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.html',
})
export class CardComponent implements OnInit {

    footer = viewChild<ElementRef<HTMLElement>>('f');

    isActive = input<boolean>(false);
    constructor() {

     }

    ngOnInit(): void { 
    }
}
