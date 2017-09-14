import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TeamListComponent } from './team/team-list/team-list.component';
import { TeamDetailComponent } from './team/team-detail/team-detail.component';
import { GameDetailComponent } from './game/game-detail/game-detail.component';
import { GameListComponent } from './game/game-list/game-list.component';
import {ChSwissrugbystatsAngular2RoutingModule} from './app-routing.module';
import {ClubDetailComponent} from './club/club-detail/club-detail.component';
import {ClubListComponent} from './club/club-list/club-list.component';

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
    HttpModule,
    MaterialModule,
    ChSwissrugbystatsAngular2RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
