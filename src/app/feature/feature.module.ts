import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListComponent } from "./team/team-list/team-list.component";
import { TeamDetailComponent } from "./team/team-detail/team-detail.component";
import { GameDetailComponent } from "./game/game-detail/game-detail.component";
import { GameListComponent } from "./game/game-list/game-list.component";
import { ClubDetailComponent } from "./club/club-detail/club-detail.component";
import { ClubListComponent } from "./club/club-list/club-list.component";
import { AccountComponent } from "./account/account.component";
import { LeagueDetailComponent } from "./league/league-detail/league-detail.component";
import { LeagueListComponent } from "./league/league-list/league-list.component";
import { LandingComponent } from "./landing/landing.component";
import { MapComponent } from "./map/map.component";
import { TosComponent } from "./tos/tos.component";
import { PrivacyComponent } from "./privacy/privacy.component";
import { CompetitionDetailComponent } from "./competition/competition-detail/competition-detail.component";
import { CompetitionListComponent } from "./competition/competition-list/competition-list.component";
import { MaterialModule } from "../material/material.module";
import { MatOptionModule, MatSelectModule } from "@angular/material";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { VenueComponent } from './venue/venue.component';
import { CoreModule } from "../core/core.module";

const components = [
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
  CompetitionDetailComponent,
  CompetitionListComponent,
  VenueComponent
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    HttpClientModule,

    SharedModule,
    CoreModule,

    MaterialModule,
    MatOptionModule,
    MatSelectModule,

    FlexLayoutModule,
  ],
  declarations: [components],
  exports: [components]
})
export class FeatureModule {
}
