import "angular2-meteor-polyfills";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { Meteor } from "meteor/meteor";
import { AppModule } from "./imports/app";

enableProdMode();

Meteor.startup(() => {
   platformBrowserDynamic().bootstrapModule(AppModule);
});

Meteor.call('runCode', "10", "value y", function (err, response) {
   console.log(response);
});
