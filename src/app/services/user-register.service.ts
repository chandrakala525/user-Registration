import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor( private http: HttpClient ) { }

  postUserDetails(data){
    return this.http.post('assets/userDetails.json',data).map((res: Response)=>res.json());
  }
}
