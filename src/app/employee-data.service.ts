import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Idata } from './Idata';


@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
 

  constructor(private http: HttpClient) { }

  public getPosts():Observable<Idata[]>
  {
    return this.http.get<Idata[]>
    ("http://localhost:5282/api/employees");
  }
}
  


