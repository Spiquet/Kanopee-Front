import { ProductsMock } from './../products-mock';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    public getProducts(): Product[] {
        return ProductsMock;
    }
}
