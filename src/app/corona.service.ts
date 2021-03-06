import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class CoronaService {

  constructor( public _HttpClient:HttpClient) { }



  summary():Observable<any>  {
    return  this._HttpClient.get('https://api.covid19api.com/summary')
    }
  }
