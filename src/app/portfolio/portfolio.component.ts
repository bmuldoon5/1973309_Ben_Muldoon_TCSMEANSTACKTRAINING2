import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  registerPortfolio(portfolioRef:any) {
    let formData = {};

    let name1 = portfolioRef.name;
    let number1 = portfolioRef.phoneNumber;

    formData = {name1, number1}; //putting contact information into the array
    
    //make into text nodes
   
    const select = document.getElementById("portfolio");
    
    //add name
    const p = document.createElement("p");
    p.textContent = name1;
    select?.appendChild(p);
    //add number
    const z = document.createElement("z");
    z.textContent = number1;
    select?.appendChild(z);




    
    //this.insertNewRecords(formData);

    

    /* example from other code
    registerUser(registerRef:any) {
      //console.log("Event generated");
      //console.log(loginRef);
      let formData = {};
    
      let fname1 = registerRef.fname;
      let lname1 = registerRef.lname;
      let username1 = registerRef.username;
      let password1 = registerRef.lname;
    
      let newObject = {fname1, lname1, username1, password1};
    
      localStorage.setItem(username1+' '+password1, JSON.stringify(newObject) )
    
      this.router.navigate (["tdf-login-page"]);
    
    /*
    formData.title = document.getElementById("title").value;
    formData.article = document.getElementById("article").value;
    formData.image = document.getElementById("image").value;
    return formData;
    */
  }
  
}
