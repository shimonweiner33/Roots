
import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnChanges {

  @Input() timePassed;
  @Input() tryAgain;
  @Output() timePassedChange = new EventEmitter();
  @Output() onTimeEnd = new EventEmitter();
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.tryAgain && changes.tryAgain.currentValue) {
      this.TIME_LIMIT = 1800;
      this.startTimer();
    }
  }

  FULL_DASH_ARRAY = 283;
  WARNING_THRESHOLD = 10;
  ALERT_THRESHOLD = 5;


  COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: this.WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: this.ALERT_THRESHOLD
    }
  };

  TIME_LIMIT = 3600;
  timeLeft = this.TIME_LIMIT;
  timerInterval = null;
  remainingPathColor = this.COLOR_CODES.info.color;

  ngOnInit(): void {
    this.startTimer();
  }

  onTimesUp() {
    this.onTimeEnd.emit();
    clearInterval(this.timerInterval);
  }

  startTimer() {
    document.getElementById("app").innerHTML = `
      <div class="base-timer">
        <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g class="base-timer__circle">
            <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
            <path
              id="base-timer-path-remaining"
              stroke-dasharray="283"
              class="base-timer__path-remaining ${this.remainingPathColor}"
              d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
              "
            ></path>
          </g>
        </svg>
        <span id="base-timer-label" class="base-timer__label">${this.formatTime(
            this.timeLeft
          )}</span>
      </div>
      `;

    this.timerInterval = setInterval(() => {
      this.timePassed = this.timePassed += 1;
      this.timePassedChange.emit(this.timePassed);
      this.timeLeft = this.TIME_LIMIT - this.timePassed;
      document.getElementById("base-timer-label").innerHTML = this.formatTime(
        this.timeLeft
      );
      this.setCircleDasharray();
      this.setRemainingPathColor(this.timeLeft);

      if (this.timeLeft === 0) {
        this.onTimesUp();
      }
    }, 1000);
  }

  formatTime(time) {
    const minutes = Math.floor(time / 60);
    //let seconds = time % 60;
    let seconds: number = time % 60;
    if (seconds < 10) {
      seconds = +`0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  }

  setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = this.COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(warning.color);
    }
  }

  calculateTimeFraction() {
    const rawTimeFraction = this.timeLeft / this.TIME_LIMIT;
    return rawTimeFraction - (1 / this.TIME_LIMIT) * (1 - rawTimeFraction);
  }

  setCircleDasharray() {
    const circleDasharray = `${(
      this.calculateTimeFraction() * this.FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }

}

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-clock',
//   templateUrl: './clock.component.html',
//   styleUrls: ['./clock.component.css']
// })
// export class ClockComponent implements OnInit {
  
//   constructor() { }

//   ngOnInit(): void {




//     const FULL_DASH_ARRAY = 283;
//     const WARNING_THRESHOLD = 10;
//     const ALERT_THRESHOLD = 5;

//     const COLOR_CODES = {
//       info: {
//         color: "green"
//       },
//       warning: {
//         color: "orange",
//         threshold: WARNING_THRESHOLD
//       },
//       alert: {
//         color: "red",
//         threshold: ALERT_THRESHOLD
//       }
//     };

//     const TIME_LIMIT = 3600;
//     let timePassed = 0;
//     let timeLeft = TIME_LIMIT;
//     let timerInterval = null;
//     let remainingPathColor = COLOR_CODES.info.color;

//     document.getElementById("app2").innerHTML = `
// <div class="base-timer">
//   <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//     <g class="base-timer__circle">
//       <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
//       <path
//         id="base-timer-path-remaining"
//         stroke-dasharray="283"
//         class="base-timer__path-remaining ${remainingPathColor}"
//         d="
//           M 50, 50
//           m -45, 0
//           a 45,45 0 1,0 90,0
//           a 45,45 0 1,0 -90,0
//         "
//       ></path>
//     </g>
//   </svg>
//   <span id="base-timer-label" class="base-timer__label">${formatTime(
//       timeLeft
//     )}</span>
// </div>
// `;

//     startTimer();

//     function onTimesUp() {
//       clearInterval(timerInterval);
//     }

//     function startTimer() {
//       timerInterval = setInterval(() => {
//         timePassed = timePassed += 1;
//         timeLeft = TIME_LIMIT - timePassed;
//         document.getElementById("base-timer-label").innerHTML = formatTime(
//           timeLeft
//         );
//         setCircleDasharray();
//         setRemainingPathColor(timeLeft);

//         if (timeLeft === 0) {
//           onTimesUp();
//         }
//       }, 1000);
//     }

//     function formatTime(time) {
//       const minutes = Math.floor(time / 60);
//       //let seconds = time % 60;
//       let seconds: number = time % 60;
//       if (seconds < 10) {
//         seconds = +`0${seconds}`;
//       }

//       return `${minutes}:${seconds}`;
//     }

//     function setRemainingPathColor(timeLeft) {
//       const { alert, warning, info } = COLOR_CODES;
//       if (timeLeft <= alert.threshold) {
//         document
//           .getElementById("base-timer-path-remaining")
//           .classList.remove(warning.color);
//         document
//           .getElementById("base-timer-path-remaining")
//           .classList.add(alert.color);
//       } else if (timeLeft <= warning.threshold) {
//         document
//           .getElementById("base-timer-path-remaining")
//           .classList.remove(info.color);
//         document
//           .getElementById("base-timer-path-remaining")
//           .classList.add(warning.color);
//       }
//     }

//     function calculateTimeFraction() {
//       const rawTimeFraction = timeLeft / TIME_LIMIT;
//       return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
//     }

//     function setCircleDasharray() {
//       const circleDasharray = `${(
//         calculateTimeFraction() * FULL_DASH_ARRAY
//       ).toFixed(0)} 283`;
//       document
//         .getElementById("base-timer-path-remaining")
//         .setAttribute("stroke-dasharray", circleDasharray);
//     }


//   }

// }
