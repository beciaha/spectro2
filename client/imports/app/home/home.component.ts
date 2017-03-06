/**
 * Created by air on 16/12/2016.
 */
import {Component} from '@angular/core';
import { Router } from '@angular/router';
import template from './home.component.html';
import { InjectUser } from 'angular2-meteor-accounts-ui';
@Component({
    selector: 'home',
    template
})
@InjectUser('user')
export class HomeComponent  {
    greeting: string;
    user: Meteor.User;
    images: string[] = [];

    constructor() {
        this.greeting = "Statistical Tools for Spectroscopy Mass Data";


        //   this.data = DemoCollection.find({}).zone();
        this.url= "./images/spektrum.png";

    }
}