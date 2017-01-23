/**
 * Created by air on 16/01/2017.
 */
import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import template from './image-upload.component.html';
import { upload,upload2 } from '../../../../both/methods/images.methods';
import {MeteorObservable} from "meteor-rxjs";
import {Component, OnInit} from '@angular/core';
import {Subject, Subscription, Observable} from "rxjs";
import {Thumb} from "../../../../both/models/image.model";
import {Thumbs} from "../../../../both/collections/images.collection";
import style from './image-upload.component.scss';

@Component({
    selector: 'image-upload',
    template,
    styles: [ style ]
})
export class ImageUploadComponent implements OnInit {
    fileIsOver: boolean = false;
    uploading: boolean = false;
    filesArray: string[] = [];
    files: Subject<string[]> = new Subject<string[]>();
thumbsSubscription: Subscription;
    thumbs: Observable<Thumb[]>;
    @Output() onFile: EventEmitter<string> = new EventEmitter<string>();
    constructor() {}
    ngOnInit() {
        this.files.subscribe((filesArray) => {
            MeteorObservable.autorun().subscribe(() => {
                if (this.thumbsSubscription) {
                    this.thumbsSubscription.unsubscribe();
                    this.thumbsSubscription = undefined;
                }
                this.thumbsSubscription = MeteorObservable.subscribe("thumbs", filesArray).subscribe(() => {
                    this.thumbs = Thumbs.find({
                        originalStore: 'images',
                        originalId: {
                            $in: filesArray
                        }
                    }).zone();
                });

            });
        });
    }
    fileOver(fileIsOver: boolean): void {
        this.fileIsOver = fileIsOver;
    }
    onFileDrop(file: File): void {
        this.uploading = true;
        console.log(`jestem tam? `);
        upload(file)
            .then((result) => {
                this.uploading = false;
                console.log(`jestem tu? `);
                this.addFile(result);
                console.log(`dodalem zdjecie `);
            })
            .catch((error) => {
                this.uploading = false;
                console.log(`Something went wrong!`, error);
            });
    }

    addFile(file) {

        this.filesArray.push(file._id);
        this.files.next(this.filesArray);
        this.onFile.emit(file._id);

    }
    addFile2(file) {

        this.filesArray.push(upload2(file)._id);
        this.files.next(this.filesArray);
        this.onFile.emit(upload2(file)._id);

    }
    reset() {
        this.filesArray = [];
        this.files.next(this.filesArray);
    }

}