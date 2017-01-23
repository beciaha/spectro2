
import { MongoObservable } from "meteor-rxjs";
import {Task} from "../models/task.model";

export const TasksCollection = new MongoObservable.Collection<Task>("task-collection");