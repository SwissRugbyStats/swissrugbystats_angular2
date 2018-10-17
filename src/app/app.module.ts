import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ChSwissrugbystatsAngular2RoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RestAuthTokenInterceptor } from './core/auth/interceptor/rest-auth-token.interceptor';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { AccountComponent } from './states/account/account.component';
import { ClubDetailComponent } from './states/club/club-detail/club-detail.component';
import { ClubListComponent } from './states/club/club-list/club-list.component';
import { GameDetailComponent } from './states/game/game-detail/game-detail.component';
import { GameListComponent } from './states/game/game-list/game-list.component';
import { LandingComponent } from './states/landing/landing.component';
import { LeagueDetailComponent } from './states/league/league-detail/league-detail.component';
import { LeagueListComponent } from './states/league/league-list/league-list.component';
import { MapComponent } from './states/map/map.component';
import { PrivacyComponent } from './states/privacy/privacy.component';
import { TeamDetailComponent } from './states/team/team-detail/team-detail.component';
import { TeamListComponent } from './states/team/team-list/team-list.component';
import { TosComponent } from './states/tos/tos.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    TeamDetailComponent,
    GameDetailComponent,
    GameListComponent,
    ClubDetailComponent,
    ClubListComponent,
    AccountComponent,
    LeagueDetailComponent,
    LeagueListComponent,
    LandingComponent,
    MapComponent,
    TosComponent,
    PrivacyComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ChSwissrugbystatsAngular2RoutingModule,
    SharedModule,
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: JWTTokenInterceptor, multi: true}
    { provide: HTTP_INTERCEPTORS, useClass: RestAuthTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
