import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Parties } from "../../../../both/collections/parties.collection";
import template from "./demo.component.html";
import style from "./demo.component.scss";
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { MeteorObservable } from 'meteor-rxjs';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Party } from '../../../../both/models/party.model';

@Component({
  selector: "demo",
  template,
  styles: [ style ]
})
@InjectUser('user')
export class DemoComponent implements OnInit {
  greeting: string;

  user: Meteor.User;
  parties: Observable<Party[]>;
  images: string[] = [];
  imagesSubs: Subscription;
  constructor() {
    this.greeting = "Statistical Tools for Spectroscopy Mass Data";

    this.parties = Parties.find({}).zone();
 //   this.data = DemoCollection.find({}).zone();
    this.url= "./images/spektrum.png";

  }

  ngOnInit() {
    //this.data = this.demoDataService.getData().zone();
    this.imagesSubs = MeteorObservable.subscribe('images').subscribe();
    Meteor.call('runCode', function (err, response) {
      console.log(response);
    });
  }
  onImage(imageId: string) {
    this.images.push(imageId);
  }
  ngOnDestroy() {

    this.imagesSubs.unsubscribe();
  }
}
