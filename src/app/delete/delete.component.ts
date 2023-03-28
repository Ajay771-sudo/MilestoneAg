import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Idata } from '../Idata';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  id !:number;
  empName !:string;
  empAge !:number;
  empAddress !:string;
  empDepartment !:string;
  empRole !:string;
  status !: string;
  constructor(private http:HttpClient){}
  onSubmit() {
    this.http.delete<Idata>('http://localhost:5282/api/Employees/3')
    .subscribe(() => this.status = 'Delete successful');
  }


}

