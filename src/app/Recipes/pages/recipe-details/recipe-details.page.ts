import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../../models/pizza.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../../Services/recipes.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  pizza!:IRecipe;
  isLoading:boolean=false;
  constructor(
    private route: ActivatedRoute,
    private pizzaRecipesService: RecipesService,
    private router:Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.isLoading=true;
      this.pizzaRecipesService.getRecipeById(id).pipe(finalize(()=>this.isLoading=false)).subscribe(recipe => {
        this.pizza = recipe.recipe;
      });
    }
   
  }

  goBack(){
    this.router.navigate(['/recipes-list'])

  }

}
