import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{
  empName !:string;
  empAge !:number;
  empAddress !:string;
  empDepartment !:string;
  empRole !:string;

  constructor(private http:HttpClient){}
  onSubmit()
  {
    const formData={
      
      empName:this.empName,
      empAge:this.empAge,
      empAddress:this.empAddress,
      empDepartment:this.empDepartment,
      empRole:this.empRole,
    };
    this.http.post('http://localhost:5282/api/Employees',formData).subscribe(response=>{
      console.error('Data saved succesfully:',response);
    },
    error=>{
      console.error('Error saving data:',error)
    });
  }
  }



