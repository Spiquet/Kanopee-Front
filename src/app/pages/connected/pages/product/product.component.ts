import { ProductService } from './../../../../shared/services/product.service';
import { User } from './../../../../shared/models/user';
import { UserService } from './../../../../shared/services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../shared/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() user: User;
  products: Product[];

  constructor(private userService: UserService, private productService: ProductService) { }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.products = this.productService.getProducts();
  }

}
