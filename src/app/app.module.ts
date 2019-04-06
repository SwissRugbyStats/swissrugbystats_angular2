import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RestAuthTokenInterceptor } from './core/auth/interceptor/rest-auth-token.interceptor';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FeatureModule } from "./feature/feature.module";
import { MaterialModule } from "./material/material.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,

    HttpClientModule,
    FormsModule,
    CommonModule,

    MaterialModule,
    FlexLayoutModule,

    CoreModule,
    FeatureModule,
    SharedModule,

  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: JWTTokenInterceptor, multi: true}
    {provide: HTTP_INTERCEPTORS, useClass: RestAuthTokenInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
