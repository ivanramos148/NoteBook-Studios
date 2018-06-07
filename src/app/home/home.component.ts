import { Component, OnInit } from '@angular/core';
import { Gallery } from '../models/gallery'
import { GalleryService } from '../services/gallery.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import * as _ from "lodash";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [GalleryService]
})
export class HomeComponent implements OnInit {
  selectedFile: FileList;
  gallery: any
  offset = 12;
  nextKey: any; // for next button
  prevKeys: any[] = []; // for prev button
  subscription: any;

  constructor(private route: Router, private galleryServices: GalleryService) { }

  ngOnInit() {
    this.getGallery()
  }
  nextPage() {
    this.prevKeys.push(_.first(this.gallery)['$key']) // set current key as pointer for previous page
    this.getGallery(this.nextKey)
  }
  prevPage() {
    const prevKey = _.last(this.prevKeys) // use last key in array
    this.prevKeys = _.dropRight(this.prevKeys) // then remove the last key in the array

    this.getGallery(prevKey)
  }
  private getGallery(key?) {
    this.subscription = this.galleryServices.getGalleriesLimit('samplePost1', this.offset, key)
                       .subscribe(gallery => {
                          this.gallery = _.slice(gallery, 0, this.offset)
                          this.nextKey =_.get(gallery[this.offset], '$key')
    })
  }
  goToDetails(clickedPost) {
    this.route.navigate(['details', clickedPost.$key]);
  };
}
