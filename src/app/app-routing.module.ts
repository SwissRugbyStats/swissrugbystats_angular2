import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameDetailComponent} from "./game/game-detail/game-detail.component";
import {GameListComponent} from "./game/game-list/game-list.component";
import {TeamListComponent} from "./team/team-list/team-list.component";
import {TeamDetailComponent} from "./team/team-detail/team-detail.component";

const routes: Routes = [
  { path: 'games', component: GameListComponent },
  { path: 'game/:id', component: GameDetailComponent },
  { path: 'teams', component: TeamListComponent},
  { path: 'team/:id', component: TeamDetailComponent},
  { path: '', component: TeamListComponent},
  { path: '**', component: TeamListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChSwissrugbystatsAngular2RoutingModule { }
