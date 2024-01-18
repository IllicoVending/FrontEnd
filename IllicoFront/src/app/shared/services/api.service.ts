import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private _urlLogin : string = "";
  //private _urlCreatePerson : string = "";
  private _urlGetAllProducts : string ="https://localhost:7114/api/Product/GetAllProduct";

  constructor(private _httpClient : HttpClient) { }

  //user comptes
  //login(user : any) : Observable<any> {
  //  return this._httpClient.post(this._urlLogin, user);
  //}

  //Products
  getAllProducts(): Observable<any>{
    return this._httpClient.get<any>(this._urlGetAllProducts);
  }
}

