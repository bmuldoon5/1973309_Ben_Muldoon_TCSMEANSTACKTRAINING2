import { Component, OnInit } from '@angular/core';
//import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-tdf-login-page',
  templateUrl: './tdf-login-page.component.html',
  styleUrls: ['./tdf-login-page.component.css']
})
export class TdfLoginPageComponent implements OnInit {
  msg:string=""
  constructor() { }

  ngOnInit(): void {
  }



  checkUser(loginRef:any) {
    //console.log("Event generated");
    //console.log(loginRef);
    let user1 = loginRef.user;
    let pass1 = loginRef.pass;
    if(localStorage.getItem(user1+' '+pass1) ==null){
      alert('incorrect information');
    }
    else{
      window.location.href="/portfolio";
    }
    


  }

}
