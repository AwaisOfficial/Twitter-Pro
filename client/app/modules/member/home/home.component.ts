import { Component, OnInit } from '@angular/core';
import { JWTOKEN } from 'client/app/constants/constants';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newCreatedPost : any;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {}

  addNewPost(event){
    this.newCreatedPost = event.post ? event.post : undefined;
  }

  openPostCreationModal(){
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.data = { title : 'Create Post' };
    modalRef.result.then((result) => {      
    });
  }

}
