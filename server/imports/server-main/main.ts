import {Images} from "../../../both/collections/images.collection";
import { Parties } from '../../../both/collections/parties.collection';
import { Party } from '../../../both/models/party.model';
import {Image} from "../../../both/models/image.model";
import './imports/publications/images';
import { Meteor } from 'meteor/meteor';
export class Main {

  start(): void {
    this.initFakeData();
  }

  initFakeData(): void {

    if (Parties.find().cursor.count() === 0) {
      const parties: Party[] = [{
        name: 'Dubstep-Free Zone',
        description: 'Can we please just for an evening not listen to dubstep.',
        location: 'Palo Alto'
      }, {
        name: 'All dubstep all the time',
        description: 'Get it on!',
        location: 'Palo Alto'
      }, {
        name: 'Savage lounging',
        description: 'Leisure suit required. And only fiercest manners.',
        location: 'San Francisco'
      }];

      parties.forEach((party: Party) => Parties.insert(party));
    }
  }


}
