import { Foods } from "./food";

export class CartItem{
    price: any;
  static quantity: number;
    constructor(food:Foods){
        this.food=food;
       
        //javascript used
        

    }
    food:Foods;
    quantity:number = 1;
    getPrice(): Number
    {
        return this.food.price * this.quantity;
    }

}