import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  newProduct = { name: '', description: '', price: 0 };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  onSubmit(): void {
    this.productService.addProduct(this.newProduct).subscribe(() => {
      this.loadProducts();
      this.newProduct = { name: '', description: '', price: 0 };
    });
  }
}
