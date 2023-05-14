import { Injectable } from '@angular/core';
import { Cart } from '../shared/model/Cart';
import { Foods } from '../shared/model/food';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart();


  addToCart(food:Foods):void{
    let cartItem = this.cart.items.find.(item => item.food.id === food.id)
    if(cartItem){
      this.changeQuantity(food.id,cartItem.quantity +1);
      return;
    }
    this.cart.items.push(new cartItem(food));
  }
  removeFromCart(foodI:number)
}
