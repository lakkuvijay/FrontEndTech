import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'kids',
  templateUrl: './kids.component.html',
  styles: [
  ]
})
export class KidsComponent implements OnInit {
  kids:string;
  constructor(private route:ActivatedRoute) { 
    this.kids = this.route.snapshot.params["p_id"]+"...."+this.route.snapshot.params["p_name"]+"...."+this.route.snapshot.params["p_cost"];
  }

  ngOnInit(): void {
  }

}
