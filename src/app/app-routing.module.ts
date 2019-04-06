import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailComponent } from './feature/game/game-detail/game-detail.component';
import { GameListComponent } from './feature/game/game-list/game-list.component';
import { PrivacyComponent } from './feature/privacy/privacy.component';
import { TeamListComponent } from './feature/team/team-list/team-list.component';
import { TeamDetailComponent } from './feature/team/team-detail/team-detail.component';
import { ClubListComponent } from './feature/club/club-list/club-list.component';
import { ClubDetailComponent } from './feature/club/club-detail/club-detail.component';
import { AccountComponent } from './feature/account/account.component';
import { LeagueListComponent } from './feature/league/league-list/league-list.component';
import { LeagueDetailComponent } from './feature/league/league-detail/league-detail.component';
import { MapComponent } from './feature/map/map.component';
import { TosComponent } from './feature/tos/tos.component';
import { CompetitionListComponent } from "./feature/competition/competition-list/competition-list.component";
import { CompetitionDetailComponent } from "./feature/competition/competition-detail/competition-detail.component";

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
  {path: '', redirectTo: 'competitions', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
