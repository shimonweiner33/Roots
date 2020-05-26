import { Component, OnInit, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http'
declare var $: any;

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
  allOpen = false;
  q1: Question = new Question("", false, false, "305532475", 5);
  q2: Question = new Question("", false, false, "shimonweiner33@gmail.com", 5);
  q3: Question = new Question("", false, false, "מורשה", 5);
  q4: Question = new Question("", false, false, "אינדי", 5);
  q5: Question = new Question("", false, false, "דארף", 5);

  q10: Question = new Question("", false, false, "שחר", 5);
  q11: Question = new Question("", false, false, "אברהם בלסברג", 5);//אברהם בלסברג 
  q12: Question = new Question("", false, false, "מעיין", 5);
  q13: Question = new Question("", false, false, "סבא וסבתא", 5);//עפ מילות השיר עומר עומר תבואה של סבא דוד
  q14: Question = new Question("", false, false, "בסלון", 5);//איפה מזל צילמה את הסרטון
  q17: Question = new Question("", false, false, "משה", 5);//נילי תמונה


  q20: Question = new Question("", false, false, "נטע רמות", 5);
  q21: Question = new Question("", false, false, "ליטל שלמה", 5);
  q22: Question = new Question("", false, false, "טוסטים", 5);//חידת וידאו של נעה כהן
  q23: Question = new Question("", false, false, "יט כסלו", 5);//חידת וידאו של עידה


  q30: Question = new Question("", false, false, "ים המלח", 5);//מיכל
  // q31: Question = new Question("", false, false, "ירדן", 5);


  q40: Question = new Question("", false, false, "סלים", 5);// קארין
  q41: Question = new Question("", false, false, "טון השוקו", 5);//ירדן
  q45: Question = new Question("", false, false, "סלט", 5);//ירדן


  tryAgainAnswer: Question = new Question("", false, false, "טוב", 5);
  score: number = 0;
  q1Score: number = 0;



  //elevator instanse
  finish = false;
  success = false;
  tryAgain = false;
  timePassed = 0;

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(res => {
      this.dataFromServer = res;
      console.log('dataFromServer', this.dataFromServer)
    })



  //   let audioPlayer: HTMLMediaElement = document.getElementById('audio1')
  //   document.getElementById('audio1').addEventListener("ended",function() {
  //     this.src = "song.php?nocache="+new Date().getTime();
  //     this.play();
  // });

  }

  calculateQuestion1() {
    this.q1Score = 0;
    for (var questionNum = 1; questionNum < 6; questionNum++) {
      this.insertAnswer(questionNum);
    }
    this.q1Score += this.score;

    this.clickOnelevatorBtn(1)
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
    if(this[q].ResultTrue){
      this.clickOnelevatorBtn(questionNum)
    }
  }





  clickOnelevatorBtn(questionNum){
    
    if(questionNum == 1){
      var level = 1;
      $('#elevatorLevel'+ level).click();
      // window.open('https://www.youtube.com/watch?v=hEC8pjzurLY','_blank');
      // window.focus();
    }
    if(questionNum == 17){
      var level = 2;
      $('#elevatorLevel'+ level).click();
    }
    if(questionNum == 23){
      var level = 3;
      $('#elevatorLevel'+ level).click();
    }
    if(questionNum == 30){
      var level = 4;
      $('#elevatorLevel'+ level).click();
    }
  }



  onFinish(isSuccess) {
    this.finish = true;
    this.success = isSuccess;
    this.tryAgain = false;
  }

  calculateTimePassed() {
    if (this.timePassed < 60) {
      return `${this.timePassed} שניות`;
    } else {
      const minutes = parseInt((this.timePassed / 60) + "");
      const seconds = this.timePassed - minutes * 60;

      return `${minutes} דקות ו-${seconds} שניות`;
    }
  }

  onTryAgain() {
    this.finish = false;
    this.tryAgain = true;
  }

//   document.getElementById('audio').addEventListener("ended",function() {
//     this.src = "song.php?nocache="+new Date().getTime();
//     this.play();
// });

}




