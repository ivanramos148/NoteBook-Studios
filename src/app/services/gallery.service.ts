import { Injectable } from '@angular/core';
import { Gallery } from '../models/gallery';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app'
import 'firebase/storage'

@Injectable()
export class GalleryService {
  galleries: FirebaseListObservable<Gallery[]>;

  constructor(private database: AngularFireDatabase) {
    this.galleries = database.list('galleries');
  }
  pushUpload(upload: Gallery) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`galleries/${upload.file.name}`).put(upload.file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
        this.addGallery(upload)
      }
    )
  }

  addGallery(newGallery: Gallery) {
    this.database.list(`galleries/`).push(newGallery);
  }
// end of picture storage
  getGalleryById(galleryId: string){
    return this.database.object(`galleries/${galleryId}`);
  }
  // original get galleires
  getGalleries(){
    return this.galleries;
  }
  getGalleriesLimit(postId, offset, startKey?): FirebaseListObservable<any> {
  return this.database.list(`galleries/`, {
            query: {
              orderByKey: true,
              startAt: startKey,
              limitToFirst: offset+1
            }
          });
  }

  updateGallery(galleryID){
    var galleryEntryInFirebase = this.getGalleryById(galleryID.$key);
    galleryEntryInFirebase.update({title: galleryID.title,
                                  description: galleryID.description});
  }
}
