import { Component, OnInit, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http'

//import { AppData } from './../AppData';//

//import {NgForm} from '@angular/forms';
//import { AppData } from './AppData';
class Question {

  AnswerText: string;
  ResultTrue: boolean;
  ResultFalse: boolean;
  RealAnswer: string;
  Score: number;

  constructor(q: string, qResultTrue: boolean, qResultFalse: boolean, realAnswer: string, score: number) {

    this.AnswerText = q;
    this.ResultTrue = qResultTrue;
    this.ResultFalse = qResultFalse;
    this.RealAnswer = realAnswer;
    this.Score = score;
  }

  // qResultTrue: boolean = false;
  // qResultFalse: boolean = false;
  // qAnswer: string = "מזגן";
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //data = new AppData('');//

  constructor(private http: HttpClient) { }
  dataFromServer = null;

  q1: Question = new Question("", false, false, "305532475", 2);
  q2: Question = new Question("", false, false, "shimonweiner33@gmail.com", 2);
  q3: Question = new Question("", false, false, "מורשה", 2);
  q4: Question = new Question("", false, false, "אינדי", 2);
  q5: Question = new Question("", false, false, "דארף", 2);

  q10: Question = new Question("", false, false, "שחר", 2);
  q11: Question = new Question("", false, false, "מזגן", 2);
  q12: Question = new Question("", false, false, "מזגן", 2);

  q20: Question = new Question("", false, false, "נטע רמות", 2);
  q21: Question = new Question("", false, false, "נעה כהן", 2);
  q22: Question = new Question("", false, false, "ליטל שלמה", 2);

  score: number = 0;
  q1Score: number = 0;

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(res => {
      this.dataFromServer = res;
      console.log('dataFromServer', this.dataFromServer)
    })
  }

  calculateQuestion1() {
    this.q1Score = 0;
    for (var questionNum = 1; questionNum < 6; questionNum++) {
      this.insertAnswer(questionNum);
    }
    this.q1Score += this.score;
  }
  insertAnswer(questionNum) {
    var q = 'q' + questionNum;
    if (this[q].AnswerText == this[q].RealAnswer) {

      this.score += (!this[q].ResultTrue) ? this[q].Score : 0;
      this[q].ResultTrue = true;
      this[q].ResultFalse = false;
    }
    else {
      this[q].ResultTrue = false;
      this[q].ResultFalse = true;
    }
  }



}




