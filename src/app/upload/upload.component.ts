import { Component, OnInit } from '@angular/core';
import { Gallery } from '../models/gallery'
import { GalleryService } from '../services/gallery.service';
import { FirebaseListObservable } from 'angularfire2/database';
declare var $:any;

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [GalleryService]
})
export class UploadComponent implements OnInit {
  selectedFile: FileList;
  galleries: FirebaseListObservable<Gallery[]>;
  currentUpload: Gallery
  constructor(private galleryServices: GalleryService) { }
  ngOnInit() {}
  fileReader(event){
    this.selectedFile = event.target.files[0]
  }
  submitForm(newTitle: string, newDescription: string) {
      let file = this.selectedFile;
      this.currentUpload = new Gallery(newTitle, file, newDescription)
      this.galleryServices.pushUpload(this.currentUpload)
  }
}
