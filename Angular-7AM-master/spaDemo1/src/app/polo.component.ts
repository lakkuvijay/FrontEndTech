import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'polo',
  templateUrl: './polo.component.html',
  styles: [
  ]
})
export class PoloComponent implements OnInit {
  polo:string;
  constructor() { 
    this.polo = "Polo Branded Shirts Soon....!";
  }

  ngOnInit(): void {
  }

}
