import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { interval, map, Observable, of, Subject, tap } from 'rxjs';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  imports: [AsyncPipe],
})
export class RXJSComponent implements OnInit {
  notificationService = inject(NotificationService);
  constructor() {}

  numbers$ = of(1, 2, 3, 4, 5);

  ngOnInit(): void {
    this.notificationService.getNotification();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.numbers$
      .pipe(
        map((x) => x * 2),
        tap((x) => console.log('Tap:', x))
      )
      .subscribe((c) => console.log('Subscribe: ', c));
  }

  sendNotifications() {}

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.notificationService.notifications$.unsubscribe();
  }
}
