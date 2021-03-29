import { Component, OnInit } from '@angular/core';
import { FormArrayName } from '@angular/forms';
import { Router } from '@angular/router';
import { StringLiteral } from 'typescript';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  register() {
    //var newData =
    this.router.navigate(["tdf-login-page"])
  }

myStorage = window.localStorage;
registerUser(registerRef:any) {
  //console.log("Event generated");
  //console.log(loginRef);
  let formData = {};

  let fname1 = registerRef.fname;
  let lname1 = registerRef.lname;
  let username1 = registerRef.username;
  let password1 = registerRef.password;

  let newObject = {fname1, lname1, username1, password1};

  localStorage.setItem(username1+' '+password1, JSON.stringify(newObject) )

  
  //this.router.navigate (["tdf-login-page"]);

  //store the data 
}

}
