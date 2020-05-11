import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  appTitle: string = 'כותרת';


  constructor() { }//

  ngOnInit(): void {
  }


//   public gotoBtnDetails(url, id) {
//     this.router.navigate([url, id]).then( (e) => {
//       if (e) {
//         console.log("Navigation is successful!");
//       } else {
//         console.log("Navigation has failed!");
//       }
//     });
// }
}
