import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDataService } from '../employee-data.service';
import { Idata } from '../Idata';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent {
  public response :Observable<Idata[]>;
  constructor(public service:EmployeeDataService){
    this.response=this.service.getPosts();
    console.log(this.response)
  }

}
