
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import {HomeComponent } from "./home/home.component";
import { DemoComponent } from "./demo/demo.component";

import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { routes } from './app.routes';
import { AUTH_DECLARATIONS } from "./auth/index";
import { routes, ROUTES_PROVIDERS } from './app.routes';
import { MaterialModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SHARED_DECLARATIONS } from './shared';
import { IMAGE_DECLARATIONS } from './image';
import { PARTIES_DECLARATIONS } from './parties';
import { FileDropModule } from "angular2-file-drop";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    DemoComponent,
HomeComponent,
    ...AUTH_DECLARATIONS,
      ...IMAGE_DECLARATIONS,
    ...SHARED_DECLARATIONS,
    ...PARTIES_DECLARATIONS
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [

    ...ROUTES_PROVIDERS

  ],
  // Modules
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AccountsModule,
    MaterialModule.forRoot(),
      FileDropModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule

  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
