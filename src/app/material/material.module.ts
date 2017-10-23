import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatSidenavModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  declarations: [
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
})
export class MaterialModule { }
