import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../corona.service';
@Component({
  selector: 'app-coronahome',
  templateUrl: './coronahome.component.html',
  styleUrls: ['./coronahome.component.css']
})
export class CoronahomeComponent implements OnInit {
alldata:object =[];


  constructor(public _CoronaService:CoronaService) {
    this._CoronaService.summary().subscribe( (data:any)=> {


this.alldata = data;


console.log(this.alldata);
    });
   }

  ngOnInit(): void {
  }

}
