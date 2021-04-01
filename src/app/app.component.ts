import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  score = 0;
  q1= '';
  q2='';
  q3 = '';
  review1 = '';
  review2 = '';
  review3 ='';
  //checking if submitted
  isSubmitted = false;

  constructor(){}
  
  submitForm(form: NgForm){
    this.isSubmitted = true;

    //counting if id matches from ngModel
    if( this.q1 =='q1-a'){
      this.score = 1+ this.score;
      this.review1= this.q1 +' is the correct answer!'
    }
    else{
      this.review1= this.q1 +' is the wrong answer!'
    } 

    if( this.q2 =='q2-b'){
      this.score = 1+ this.score;
      this.review2= this.q2+ ' is the correct answer!'
    }
    else{
      this.review2= this.q2 + ' is the wrong answer!'
    }

    if( this.q3 =='q3-c'){
      this.score = 1+ this.score;
      this.review3= this.q3 +' is the correct answer!'
    }
    else{
      this.review3= this.q3 +' is the wrong answer!'
    }



  }
  
  /*
    for(let i =0; i<3 ; i++){
      if (this.answer[i] == "right"){
        this.score = this.score +1;
      }
      else {}
        
      }
    */
  }





