import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe 1',
      'This is a test 1',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'
    ),
    new Recipe(
      'Test Recipe 2',
      'This is a test 2',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/10/05-October-slow-cooker-chilli-con-carne-5f03c40.jpg?quality=90&resize=960,408'
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
