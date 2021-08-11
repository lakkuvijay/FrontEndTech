import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'niki',
  templateUrl: './niki.component.html',
  styles: [
  ]
})
export class NikiComponent implements OnInit {
  niki:string;
  constructor(private route:ActivatedRoute) { 
    this.niki = this.route.snapshot.params["p_id"]+"...."+this.route.snapshot.params["p_name"]+"...."+this.route.snapshot.params["p_cost"];
  }

  ngOnInit(): void {
  }

}
