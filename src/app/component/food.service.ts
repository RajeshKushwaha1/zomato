import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): any {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '../../assets//image/pepperoni-pizza.jpg',
        tags: ['FastFood', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        cookTime: '20-38',
        price: 20,
        favorite: true,
        origins: ['persia', 'china'],
        stars: 4.7,
        imageUrl: '../../assets/image/meatballs.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        cookTime: '10-15',
        price: 5,
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '../../assets//image/hamburger.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        cookTime: '15-20',
        price: 2,
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '../../assets//image/frypotato.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        cookTime: '40-50',
        price: 11,
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '../../assets//image/chickensoup.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        cookTime: '40-50',
        price: 9,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '../../assets//image/vegitablepizza.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Pizza',
        cookTime: '10-25',
        price: 20,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '../../assets//image/pizza.jpg',
        tags: ['FastFood', 'Lunch'],
      },
      {
        id: 8,
        name: 'chips',
        cookTime: '5',
        price: 10,
        favorite: true,
        origins: ['india'],
        stars: 4.5,
        imageUrl: '../../assets//image/chips.jpg',
        tags: ['FastFood'],
      },
    ];
  }
}
