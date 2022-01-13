import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-crona',
  templateUrl: './crona.component.html',
  styleUrls: ['./crona.component.css']
})
export class CronaComponent implements OnInit {

  constructor() { }
  cronacont = new FormGroup({
    name : new FormControl ('',Validators.required ),
    serial : new FormControl ('', Validators.required)
    
    });
  
  send (){
console.log(this.cronacont)  }
  ngOnInit(): void {
  }

}
