import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe : Recipe;

  @Output('itemDetails') selectedRecipeDetail = new EventEmitter<Recipe>();

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
  }

  onRecipeSelect(){
    // this.selectedRecipeDetail.emit({
    //   name : this.recipe.name,
    //   description: this.recipe.description,
    //   imagePath : this.recipe.imagePath
    // })
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
