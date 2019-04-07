import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from "./auth/authentication.service";
import { RestAuthTokenInterceptor } from "./auth/interceptor/rest-auth-token.interceptor";
import { CrawlerService } from "./crawler/crawler.service";
import { JWTTokenInterceptor } from "./auth/interceptor/jwt-token.interceptor";
import { VenueService } from "./venue/venue.service";
import { SeasonService } from "./season/season.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthenticationService,
    CrawlerService,
    RestAuthTokenInterceptor,
    JWTTokenInterceptor,
    VenueService,
    SeasonService
  ],
  declarations: []
})
export class CoreModule {
}
