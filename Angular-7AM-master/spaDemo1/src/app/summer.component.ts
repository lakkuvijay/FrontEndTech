import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'summer',
  templateUrl: './summer.component.html',
  styles: [
  ]
})
export class SummerComponent implements OnInit {
  summer:string;
  constructor() { 
    this.summer = "Kids Summer Collection Soon....!";
  }

  ngOnInit(): void {
  }

}
