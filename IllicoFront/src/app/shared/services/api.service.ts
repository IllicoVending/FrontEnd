import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { RegisterData } from '../models/RegisterData';
import { LoginData } from '../models/LoginData';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _urlLogin : string = "https://localhost:7114/api/Auth/login";
  private _urlCreatePerson : string = "https://localhost:7114/api/Auth/register";
  private _urlGetAllProducts : string ="https://localhost:7114/api/Product/GetAllProduct";

  constructor(private _httpClient : HttpClient) { }

  //user comptes
  login(user : LoginData) : Observable<any> {
    return this._httpClient.post(this._urlLogin, user);
  }

  //Products
  getAllProducts(): Observable<any>{
    return this._httpClient.get<any>(this._urlGetAllProducts);
  }

  createUser(user : RegisterData) : Observable<any>{
    return this._httpClient.post(this._urlCreatePerson,user);
  }
}

