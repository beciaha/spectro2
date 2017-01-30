import { Party } from '../models/party.model';
import { MongoObservable } from 'meteor-rxjs';
export const Parties = new MongoObservable.Collection<Party>('parties');
