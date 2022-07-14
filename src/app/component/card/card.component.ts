import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  allData: any = [];
  tagsItem: any = [];
  filterFoodItem: any = [];
  constructor(private _foodService: FoodService) {}

  ngOnInit(): void {
    console.log(this._foodService.getAll());
    this.allData = this._foodService.getAll();
  }

  filterFood(tag: any) {
    this.filterFoodItem = this._foodService.getAll();
    this.filterFoodItem.map((el: any) => {
      el.tags.map((el: any) => {
        if (el === tag) {
          return el;
        }
      });
      this.allData = this.filterFoodItem;
    });
  }
  searchData(data: any) {}
}
