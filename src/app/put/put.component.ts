import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Idata } from '../Idata';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent {
  id !:number;
  empName !:string;
  empAge !:number;
  empAddress !:string;
  empDepartment !:string;
  empRole !:string;
  constructor(private http:HttpClient){}
  onSubmit()
  {
    const formData={
      id:this.id,
      empName:this.empName,
      empAge:this.empAge,
      empAddress:this.empAddress,
      empDepartment:this.empDepartment,
      empRole:this.empRole,
    };
    this.http.put<Idata>('http://localhost:5282/api/Employees/4',formData).subscribe((data)=>{
      
        this.id = data.id
        console.warn(data)
        
        

   } ) ;
      

    }
  }



