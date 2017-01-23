import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DemoDataService } from "./demo-data.service";
import { Demo } from "../../../../both/models/demo.model";
import { DemoCollection } from "../../../../both/collections/demo.collection";
import { Task } from "../../../../both/models/task.model";
import template from "./demo.component.html";
import style from "./demo.component.scss";
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { MeteorObservable } from 'meteor-rxjs';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: "demo",
  template,
  styles: [ style ]
})
@InjectUser('user')
export class DemoComponent implements OnInit {
  greeting: string;
  data: Observable<Demo[]>;
  user: Meteor.User;
  tasks: Observable<Task[]>;
  images: string[] = [];
  imagesSubs: Subscription;
  constructor(private demoDataService: DemoDataService) {
    this.greeting = "Statistical Tools for Spectroscopy Mass Data";
   // this.data = DemoCollection.find({}).zone();
    this.url= "./images/spektrum.png";

  }

  ngOnInit() {
    this.data = this.demoDataService.getData().zone();
    this.imagesSubs = MeteorObservable.subscribe('images').subscribe();

  }
  onImage(imageId: string) {
    this.images.push(imageId);
  }
  ngOnDestroy() {

    this.imagesSubs.unsubscribe();
  }
}
