import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailComponent } from './states/game/game-detail/game-detail.component';
import { GameListComponent } from './states/game/game-list/game-list.component';
import { PrivacyComponent } from './states/privacy/privacy.component';
import { TeamListComponent } from './states/team/team-list/team-list.component';
import { TeamDetailComponent } from './states/team/team-detail/team-detail.component';
import { ClubListComponent } from './states/club/club-list/club-list.component';
import { ClubDetailComponent } from './states/club/club-detail/club-detail.component';
import { AccountComponent } from './states/account/account.component';
import { LandingComponent } from './states/landing/landing.component';
import { LeagueListComponent } from './states/league/league-list/league-list.component';
import { LeagueDetailComponent } from './states/league/league-detail/league-detail.component';
import { MapComponent } from './states/map/map.component';
import { TosComponent } from './states/tos/tos.component';
import { CompetitionListComponent } from "./states/competition/competition-list/competition-list.component";
import { CompetitionDetailComponent } from "./states/competition/competition-detail/competition-detail.component";

const routes: Routes = [
  {path: 'games', component: GameListComponent},
  {path: 'games/:id', component: GameDetailComponent},
  {path: 'teams', component: TeamListComponent},
  {path: 'teams/:id', component: TeamDetailComponent},
  {path: 'clubs', component: ClubListComponent},
  {path: 'clubs/:id', component: ClubDetailComponent},
  {path: 'leagues', component: LeagueListComponent},
  {path: 'leagues/:id', component: LeagueDetailComponent},
  {path: 'competitions', component: CompetitionListComponent},
  {path: 'competitions/:id', component: CompetitionDetailComponent},
  {path: 'map', component: MapComponent},
  {path: 'account', component: AccountComponent},
  {path: 'tos', component: TosComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: '', component: LandingComponent},
  {path: '**', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChSwissrugbystatsAngular2RoutingModule {
}
