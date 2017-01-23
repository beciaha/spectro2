import {DemoCollection} from "../../../both/collections/demo.collection";
import {Images} from "../../../both/collections/images.collection";
import {Demo} from "../../../both/models/demo.model";
import {Image} from "../../../both/models/image.model";
import './imports/publications/images';
export class Main {
  start(): void {
    this.initFakeData();
  }

  initFakeData(): void {
    if (DemoCollection.find({}).cursor.count() === 0) {
      const data: Demo[] = [{
        name: "Dotan",
        age: 25
      }, {
        name: "Liran",
        age: 26
      }, {
        name: "Uri",
        age: 30
      }];
      data.forEach((demo: Demo) => DemoCollection.insert(demo));

    }
  }
}
