import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-crop-image',
  templateUrl: './crop-image.component.html',
  styleUrls: ['./crop-image.component.scss']
})
export class CropImageComponent implements OnInit {

  @Input('data') data;
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() { this.imageChangedEvent = event; }

  imageCropped(event: ImageCroppedEvent) {this.croppedImage = event.base64; }

  cropImage(){ this.activeModal.close(this.croppedImage); }

}
