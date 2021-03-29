import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amazing-Portfolio';
}


export class MyRegisterClass
{
  public firstName: string;
  public lastName: string;
  public username:string;
  public password:string;

  constructor(firstName:string, lastName: string, username:string, password:string){
    this.firstName = firstName;
    this.lastName=lastName;
    this.username=username;
    this.password=password;
  }
    
}
