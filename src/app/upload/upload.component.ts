import { Component } from '@angular/core';
import { Gallery } from '../models/gallery'
import { GalleryService } from '../services/gallery.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [GalleryService]
})
export class UploadComponent {
  selectedFile: FileList;
  galleries: FirebaseListObservable<Gallery[]>;

  constructor(private galleryServices: GalleryService) { }

  fileReader(event){
    this.selectedFile = event.target.files[0]
  }
  submitForm(newTitle: string, newFile: string) {
    let file = this.selectedFile;
    let newGalleries: Gallery = new Gallery(newTitle, file, newFile)
    this.galleryServices.pushUpload(newGalleries)
  }
}
