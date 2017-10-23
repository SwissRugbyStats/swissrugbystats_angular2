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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserAnimationsModule,
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
    BrowserAnimationsModule,
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
