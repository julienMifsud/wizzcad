import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [],
  imports: [MatInputModule, MatTableModule, MatButtonModule],
  exports: [MatInputModule, MatTableModule, MatButtonModule],
})
export class MaterialModule {}
