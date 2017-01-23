
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { DemoDataService } from "./demo/demo-data.service";
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { routes } from './app.routes';
import { AUTH_DECLARATIONS } from "./auth/index";
import { routes, ROUTES_PROVIDERS } from './app.routes';
import { MaterialModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SHARED_DECLARATIONS } from './shared';
import { IMAGE_DECLARATIONS } from './image';
import { FileDropModule } from "angular2-file-drop";

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    DemoComponent,
    ...AUTH_DECLARATIONS,
      ...IMAGE_DECLARATIONS,
    ...SHARED_DECLARATIONS
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    DemoDataService,
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
      FileDropModule

  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
