import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SRSGamesComponent } from './srs-games/srs-games.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
  ],
  declarations: [
    SRSGamesComponent,
    TopNavigationComponent
  ],
  exports: [
    SRSGamesComponent,
    TopNavigationComponent
  ]
})
export class SharedModule {
}
