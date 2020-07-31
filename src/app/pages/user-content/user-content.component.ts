import { Component, OnInit } from '@angular/core';
import { UnsubscribeComponent } from '@shared/components/unsubscribe/unsubscribe.component';
import { UserContentService } from '@shared/services/user-content/user-content.service';
import * as moment from 'moment';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.scss'],
})
export class UserContentComponent extends UnsubscribeComponent
  implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'createdAt', 'updatedAt'];
  dataSource = [];
  constructor(private userContentService: UserContentService) {
    super();
  }

  ngOnInit() {
    this.userContentService
      .get()
      .pipe(takeUntil(this._subject))
      .subscribe((data: []) => {
        this.dataSource = data.map((d: any) => ({
          id: d.id,
          name: d.name,
          createdAt: this.formatDate(d.createdAt),
          updatedAt: this.formatDate(d.updatedAt),
        }));
      });
  }

  formatDate(date: string) {
    return moment(date).locale('fr').format('L');
  }
}
