import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor(private http: HttpClient) { }

  listhistory:Array<String> = new Array<String>()
  getListCurrencies():Observable<any>
  {
   return this.http.get<any>("https://v6.exchangerate-api.com/v6/634e7a1abd401252309da17c/latest/USD") 
  }

}
// https://v6.exchangerate-api.com/v6/7e8a74d1ea24d8ea5179702c/latest/USD