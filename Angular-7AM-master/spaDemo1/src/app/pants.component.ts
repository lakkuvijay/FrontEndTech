import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pants',
  templateUrl: './pants.component.html',
  styles: [
  ]
})
export class PantsComponent implements OnInit {
  pants:string;
  constructor() {
    this.pants = "Pants Soon....!";
   }

  ngOnInit(): void {
  }

}
