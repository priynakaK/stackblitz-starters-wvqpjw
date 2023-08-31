import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  standalone: true,
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  products: any;
  AllItems: Product[] = [];
  OneItem: Product = new Product();
  constructor(private apiservice: ProductService) {
    this.apiservice.getProduct().subscribe((data) => {
      console.log(data);
      this.products = data;
      for (var item in this.products.products) {
        console.log(item);
      }
    });
  }

  ngOnInit() {}
}
