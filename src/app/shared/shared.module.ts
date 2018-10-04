import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SRSGamesComponent} from './srs-games/srs-games.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatTableModule
} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ],
  declarations: [
    SRSGamesComponent
  ],
  exports: [
    SRSGamesComponent
  ]
})
export class SharedModule {
}
