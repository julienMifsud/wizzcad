import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  template: ``,
})
export class UnsubscribeComponent implements OnDestroy {
  protected _subject: Subject<boolean> = new Subject();
  ngOnDestroy(): void {
    this._subject.next(true);
    this._subject.complete();
  }
}
