import { Component, OnInit } from '@angular/core';
import { Gallery } from '../models/gallery'
import { FirebaseListObservable } from 'angularfire2/database';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [GalleryService]
})
export class HomeComponent implements OnInit {
  galleries: FirebaseListObservable<Gallery[]>;
  constructor(private galleryServices: GalleryService) { }
  ngOnInit() {
    this.galleries = this.galleryServices.getGalleries()
  }
  submitForm(input, inputtwo) {
    let newGalleries: Gallery = new Gallery(input, inputtwo, 'he')
    this.galleryServices.addGallery(newGalleries)
  }
}
