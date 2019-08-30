import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OperationsService } from 'client/app/services';

@Component({
  selector: 'app-show-member-profile',
  templateUrl: './show-member-profile.component.html',
  styleUrls: ['./show-member-profile.component.scss']
})
export class ShowMemberProfileComponent implements OnInit {
  
  private data : any = {};
  
  constructor(private operationsService : OperationsService) { }

  ngOnInit() {
    this.data = history.state.data;
  }
}
