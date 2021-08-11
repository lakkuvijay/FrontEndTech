import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'shirts',
  templateUrl: './shirts.component.html',
  styles: [
  ]
})
export class ShirtsComponent implements OnInit {
  shirts:string;
  constructor(private route:ActivatedRoute) { 
    this.shirts = this.route.snapshot.params["p_id"]+"....."+this.route.snapshot.params["p_name"]+"....."+this.route.snapshot.params["p_cost"];
  }

  ngOnInit(): void {
  }

}
