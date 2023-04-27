import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food';
import { Tag } from 'src/app/shared/model/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoodByTag(tag: string) : Foods[]
  {

    return tag == "All" ?

    this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));

  }

  getAllTag():Tag[]{
    return[
      {name:'All',count:14},
      {name:'FastFood',count:4},
      {name:'Pizza',count:1},
      {name:'lunch',count:15},
      {name:'slowfouud',count:14},
      {name:'fry',count:18},
      {name:'good',count:8},
      {name:'soup',count:9}

    ];
  }
 
  getAll(): Foods[]{   // This is for all Input data Array
    return[
      {
        id:1,
        name:'FastFood',
        price:5,
        cookTime:'10-15',
        favorite:false,
        origins:['germany','us'],
        star:3.5,
        imageUrl:'/assets/Food1.jpg',
        tags:['FastFood','hamburger']
      },
      {
        id:2,
        name:'lunch',
        price:5,
        cookTime:'10-15',
        favorite:false,
        origins:['germany','us'],
        star:3.5,
        imageUrl:'/assets/food2.jpg',
        tags:['lunch','hamburger']
      },
      {
        id:3,
        name:'fry',
        price:5,
        cookTime:'10-15',
        favorite:true,
        origins:['germany','us'],
        star:3.5,
        imageUrl:'/assets/food3.jpg',
        tags:['fry','hamburger']
      },
        {
          id:4,
        name:'slowfouud',
        price:5,
        cookTime:'10-15',
        favorite:false,
        origins:['germany','us'],
        star:3.5,
        imageUrl:'/assets/food5.jpg',
        tags:['slowfouud','hamburger']
        },
        {
        id:5,
        name:'soup',
        price:5,
        cookTime:'10-15',
        favorite:false,
        origins:['India','us'],
        star:3.5,
        imageUrl:'/assets/Food1.jpg',
        tags:['soup','hamburger']
        },
        {
          id:6,
          name:'soup',
          price:5,
          cookTime:'10-15',
          favorite:true,
          origins:['India','us'],
          star:3.5,
          imageUrl:'/assets/Food1.jpg',
          tags:['soup','hamburger']
          },
          {
            id:7,
            name:'soup',
            price:5,
            cookTime:'10-15',
            favorite:true,
            origins:['India','us'],
            star:3.5,
            imageUrl:'/assets/Food1.jpg',
            tags:['fastFood','hamburger']
            },
            {
              id:8,
              name:'Pizza',
              price:5,
              cookTime:'10-15',
              favorite:false,
              origins:['India','us'],
              star:3.5,
              imageUrl:'/assets/Food1.jpg',
              tags:['Pizza','hamburger']
              }
      
    ];
  }
}


