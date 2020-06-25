import { Recipe } from "./recipe.model";
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

    private recipes: Recipe[] = [
    new Recipe(
      'Tuscan Chicken Skillet',
      'Must try',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
      [
        new Ingredient('Fettuccine ',12),
        new Ingredient('Soya Sauce',1)
      ]
      ),
    new Recipe(
      'Burger King Burger',
      'Fatty food',
      'https://metro.co.uk/wp-content/uploads/2019/11/PRI_95891344.jpg?quality=90&strip=all',
      [
        new Ingredient('Burger Bread',1),
        new Ingredient('Mayo', 1)
      ]
      )
  ];

  constructor(private slService : ShoppingListService){}

  getRecipes(){
      return this.recipes.slice();
  }

  getRecipe(id:number){
    return this.recipes.slice()[id];
  }

  addIngredientsToShoppingList(ingredients : Ingredient[]){
    this.slService.addIngredients(ingredients)
  }
}