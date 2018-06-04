import { Injectable } from '@angular/core';
import { Gallery } from '../models/gallery';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GalleryService {
  galleries: FirebaseListObservable<Gallery[]>;

  constructor(private database: AngularFireDatabase) {
    this.galleries = database.list('galleries');
  }
  getAlbumById(galleryId: string){
    return this.database.object(`galleries/${galleryId}`);
  }
  getGalleries(){
    return this.galleries;
  }
  addGallery(newGallery: Gallery) {
    this.galleries.push(newGallery);
  }
}
