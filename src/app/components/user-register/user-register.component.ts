import { Component, OnInit } from '@angular/core';
import { UserRegisterService } from '../../services/user-register.service';
import 'rxjs';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  userDetails: object = {};
  userDetailsJson: any = [];

  constructor(private _UserRegisterService:UserRegisterService) { }

  ngOnInit() {
  }

  userRegister() {
    console.log("userDetails", this.userDetails);
    this.userDetailsJson.push(this.userDetails);
    console.log("userDetailsJson", this.userDetailsJson);

    this._UserRegisterService.postUserDetails(this.userDetailsJson).subscribe(data=>console.log(data));


    
  }

  userClear() {
    console.log("hello reset");
    this.userDetails = {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      confirmPassword: "",
      email: "",
      dateOfBirth: ""
    }
  }

}
