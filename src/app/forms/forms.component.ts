import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

contact = new FormGroup({
email : new FormControl (),
password : new FormControl ()


});
send (){
  // alert("send")
  console.log(this.contact)
}

  ngOnInit(): void {
  }

}

