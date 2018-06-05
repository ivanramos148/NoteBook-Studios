import { Injectable } from '@angular/core';
import { Comments } from '../models/comments';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app'
import 'firebase/storage'

@Injectable()
export class CommentsService {
  comments: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.comments = database.list('comments');
  }
  addComment(newComment: Comments, galleryId: string){
    this.database.list(`comments/${galleryId}`).push(newComment);
  }
  getCommentById(galleryId: string) {
    return this.database.list(`/comments/${galleryId}`)
  }
}
