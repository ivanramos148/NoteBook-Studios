import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Gallery } from '../models/gallery'
import { Comments } from '../models/comments'
import { GalleryService } from '../services/gallery.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { CommentsService } from '../services/comments.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
declare var $:any;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [GalleryService, CommentsService]
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private galleryserices: GalleryService, private commentSerices: CommentsService) { }
  galleryId: string;
  comments: any;
  editGallery = null;

  galleryPosts;
  ngOnInit() {
     this.route.params.forEach((urlParameters) => {
      this.galleryId = urlParameters['id'];
    });
      this.galleryserices.getGalleryById(this.galleryId).subscribe(dataLastEmittedFromObserver => {
      this.galleryPosts = dataLastEmittedFromObserver;
    });
      this.commentSerices.getCommentById(this.galleryId).subscribe(dataLastEmittedFromObserver => {
      this.comments = dataLastEmittedFromObserver;
    });
   }
   addText(commentText: string) {
     if(commentText == ''){
       alert('please enter text!')
     } else {
       this.commentSerices.addComment((new Comments(commentText)), this.galleryId)
     }
   }
   editPost(galleries){
    this.editGallery = galleries;
   }
   updateGallery(currentEdit){
     this.galleryserices.updateGallery(currentEdit);
   }
   DoneEdit(){
     this.editGallery = null;
   }
}
