import { Component, OnInit } from '@angular/core';
import { Gallery } from '../models/gallery'
import { GalleryService } from '../services/gallery.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [GalleryService]
})
export class HomeComponent implements OnInit {
  selectedFile: FileList;
  galleries: FirebaseListObservable<Gallery[]>;

  constructor(private route: Router, private galleryServices: GalleryService) { }

  ngOnInit() {
    this.galleries = this.galleryServices.getGalleries()
  }
  goToDetails(clickedPost) {
    this.route.navigate(['details', clickedPost.$key]);
  };
}
