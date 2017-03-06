import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';
import {LoginComponent} from "./auth/login.component";
import {DemoComponent} from "./demo/demo.component";
import {SignupComponent} from "./auth/signup.component";
import {RecoverComponent} from "./auth/recover.component";
import {HomeComponent} from "./home/home.component";
export const routes: Route[] = [
    { path: 'new', component: DemoComponent},
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'recover', component: RecoverComponent }
];

export const ROUTES_PROVIDERS = [{
    provide: 'canActivateForLoggedIn',
    useValue: () => !! Meteor.userId()
}];