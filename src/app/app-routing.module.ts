import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameDetailComponent} from './states/game/game-detail/game-detail.component';
import {GameListComponent} from './states/game/game-list/game-list.component';
import {TeamListComponent} from './states/team/team-list/team-list.component';
import {TeamDetailComponent} from './states/team/team-detail/team-detail.component';
import {ClubListComponent} from './states/club/club-list/club-list.component';
import {ClubDetailComponent} from './states/club/club-detail/club-detail.component';
import { AccountComponent } from './states/account/account.component';

const routes: Routes = [
  { path: 'games', component: GameListComponent },
  { path: 'games/:id', component: GameDetailComponent },
  { path: 'teams', component: TeamListComponent},
  { path: 'teams/:id', component: TeamDetailComponent},
  { path: 'clubs', component: ClubListComponent},
  { path: 'clubs/:id', component: ClubDetailComponent},
  { path: 'account', component: AccountComponent},
  { path: '', component: TeamListComponent},
  { path: '**', component: TeamListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChSwissrugbystatsAngular2RoutingModule { }
