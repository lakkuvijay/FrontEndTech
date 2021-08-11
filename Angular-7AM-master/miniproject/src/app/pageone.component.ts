import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pageone',
  templateUrl: './pageone.component.html',
  styles: [
  ]
})
export class PageoneComponent implements OnInit {

  page_one:string;

  constructor() { 
    this.page_one = "Page One !!!";
  }

  ngOnInit(): void {
  }

}
