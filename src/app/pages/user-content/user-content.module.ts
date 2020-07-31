import { NgModule } from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';
import { UserContentRoutingModule } from './user-content-routing.module';
import { UserContentComponent } from './user-content.component';

@NgModule({
  declarations: [UserContentComponent],
  imports: [UserContentRoutingModule, MaterialModule],
})
export class UserContentModule {}
