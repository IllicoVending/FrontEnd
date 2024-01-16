import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _urlLogin : string = ""
  private _urlCreatePerson : string = ""

  constructor(private _httpClient : HttpClient) { }

  login(user : any) : Observable<any> {
    return this._httpClient.post(this._urlLogin, user);
  }
}

