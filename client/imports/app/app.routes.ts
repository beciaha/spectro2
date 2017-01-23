import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';
import {LoginComponent} from "./auth/login.component";
import {DemoComponent} from "./demo/demo.component";
import {SignupComponent} from "./auth/signup.component";
import {RecoverComponent} from "./auth/recover.component";
export const routes: Route[] = [
    { path: '', component: DemoComponent},
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'recover', component: RecoverComponent }
];

export const ROUTES_PROVIDERS = [{
    provide: 'canActivateForLoggedIn',
    useValue: () => !! Meteor.userId()
}];