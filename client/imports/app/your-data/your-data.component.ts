/**
 * Created by air on 16/12/2016.
 */
import { MongoObservable } from 'meteor-rxjs';
import {Component} from '@angular/core';
import { Meteor } from 'meteor/meteor';
import { Router } from '@angular/router';
import template from './your-data.component.html';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import {Images} from "../../../../both/collections/images.collection";
import style from './your-data.component.scss';
import { Observable } from 'rxjs/Observable';
@Component({
    selector: 'your',
    template,
    styles: [ style ]
})
@InjectUser('user')
export class YourComponent  {
    greeting: string;
    user: Meteor.User;
    images: Observable<any[]>;
   id = Meteor.userId();

    constructor() {
        this.images = Images.find({"userId": Meteor.userId()}).zone();

    }
}
