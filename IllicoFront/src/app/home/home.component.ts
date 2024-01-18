import { Component,OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { CommonModule } from '@angular/common';
import { Product } from '../shared/models/Product';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products: any = [];

  constructor(private ApiService: ApiService ){}

  ngOnInit(){
    this.fetchProducts();
  }

  fetchProducts(){
    this.ApiService.getAllProducts().subscribe({
      next : (resp) => {
        console.log("ca passe");
        this.products = resp;
      },
      error : (error) => {
        console.error('Error during login:', error);
      }
      })
    
  }
}
