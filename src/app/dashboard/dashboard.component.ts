import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
order:string = "New Order";
count:number = 150 ;
description:string =   " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione aliquam voluptatem, id natus pariatur ullam. Doloribus perferendis nam ipsam ad aliquam delectus molestias, optio reiciendis numquam cum, corporis dolore asperiores";
  constructor() { }

  ngOnInit(): void {
  }

}
