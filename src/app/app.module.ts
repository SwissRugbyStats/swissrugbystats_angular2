import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { TeamListComponent } from './states/team/team-list/team-list.component';
import { TeamDetailComponent } from './states/team/team-detail/team-detail.component';
import { GameDetailComponent } from './states/game/game-detail/game-detail.component';
import { GameListComponent } from './states/game/game-list/game-list.component';
import {ChSwissrugbystatsAngular2RoutingModule} from './app-routing.module';
import {ClubDetailComponent} from './states/club/club-detail/club-detail.component';
import {ClubListComponent} from './states/club/club-list/club-list.component';
import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    TeamDetailComponent,
    GameDetailComponent,
    GameListComponent,
    ClubDetailComponent,
    ClubListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    MaterialModule,
    ChSwissrugbystatsAngular2RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
