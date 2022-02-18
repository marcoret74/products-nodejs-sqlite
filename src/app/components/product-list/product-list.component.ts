import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      console.log(data);
      this.products = data;
    }, (err) => console.error(err));
  }
}