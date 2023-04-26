import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  admindata:any;
  private API_URL = environment.API_URL;
  constructor( private httpRequest:HttpClient) { }

  getAdmin(){
    return this.admindata = [
      {
        'name' : 'A',
        'email' : 'a@gmail.com'
      },
      {
        'name' : 'B',
        'email' : 'b@gmail.com'
      }
    ];
  }

  getDataFormApi(){

    return this.httpRequest.get(this.API_URL+'student');

  }
}
