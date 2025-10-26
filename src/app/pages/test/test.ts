import { AfterViewInit, Component, OnInit, viewChild } from '@angular/core';
import { CardComponent } from "../../components/card/card";

@Component({
    selector: 'app-test',
    templateUrl: './test.html',
    imports: [CardComponent],
})
export class TestComponent implements OnInit, AfterViewInit {
    card = viewChild<CardComponent>('card');
    constructor() { 
        
    }

    ngOnInit(): void { 
        console.log("🔃 isActive onInit: ", this.card()?.isActive());

    }
    ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        console.log("✅ isActive afterViewInit: ", this.card()?.isActive());
        
    }
}
