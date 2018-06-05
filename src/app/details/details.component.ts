import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Gallery } from '../models/gallery'
import { GalleryService } from '../services/gallery.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [GalleryService]
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private galleryserices: GalleryService) { }
  galleryId: string;
  galleryPosts;
  ngOnInit() {
     this.route.params.forEach((urlParameters) => {
      this.galleryId = urlParameters['id'];
    });
    this.galleryPosts = this.galleryserices.getGalleryById(this.galleryId);
   }
}
