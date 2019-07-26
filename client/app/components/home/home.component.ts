import { Component, OnInit } from '@angular/core';
import { JWTOKEN } from 'client/app/constants/constants';
import { OperationsService } from 'client/app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private operationsService: OperationsService) { }

  ngOnInit() {
    console.log ( localStorage.getItem(JWTOKEN) );
    const payload = { text : 'Hello Jawad Aziz Farhad.' , role : 'member'}
    const createRequest = this.operationsService.postOperations('create-post', payload);
    createRequest.subscribe(result => {
      console.log('Created Request Response', result);
    },
    error => console.error('Created Request Error', error));
  }

}
