import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notifications$: BehaviorSubject<string> = new BehaviorSubject('');

  getNotification() {
    // Listen to notification api
    const ali = 'علی آنلاین شد';
    const reza = 'رضا آنلاین شد';

    this.notifications$.next(ali);
    setTimeout(() => {
      this.notifications$.next(reza);
    }, 1000);
  }
}
