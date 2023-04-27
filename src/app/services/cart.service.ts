import { Injectable } from '@angular/core';
import { Cart } from '../shared/model/Cart';
import { Foods } from '../shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();


  addToCart(food:Foods):void{

    let cartitem = this.cart.item.find(item=> item)
  }
}
