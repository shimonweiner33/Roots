import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-elevator',
  templateUrl: './elevator.component.html',
  styleUrls: ['./elevator.component.scss']
})
export class ElevatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {




    var current = 0;
    // $(document).ready(function(){
    
    //   $("#floorSelect li").click(function(){
      
    //     var floor = parseInt($(this).data("floor")),
    //      height = floor*20,
    //      animate = Math.abs(current-floor)*1000;
    //    if(floor == current) return;
    // $("#rightDoor").removeClass("active-right");   
    //     $("#leftDoor").removeClass("active-left");  
    //     setTimeout(function(){$("#elevatorContainer").css("transition","all "+animate+"ms linear");
    //     $("#elevatorContainer").css("bottom",height+"%");
    //     current = floor;
    //     setTimeout(function(){
        
    //     $("#rightDoor").addClass("active-right");   
    //     $("#leftDoor").addClass("active-left");  
        
    //     },animate);},300);
    //   });
    
    // });

  }




  

}
