import { Component, OnInit } from '@angular/core';
import { Gallery } from '../models/gallery'
import { GalleryService } from '../services/gallery.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [GalleryService]
})
export class HomeComponent implements OnInit {
  selectedFile: FileList;
  galleries: FirebaseListObservable<Gallery[]>;

  constructor(private galleryServices: GalleryService) { }

  ngOnInit() {
    this.galleries = this.galleryServices.getGalleries()
  }
}
