import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MilestoneAg';
  result:any;
  constructor(private http:HttpClient)
  {
    this.http.get("http://localhost:5282/api/employees").subscribe(data=>{console.log(data)},
    err=>{console.log("error occured")}
    );
  }
  ngOnInit(){}

  
  
}


