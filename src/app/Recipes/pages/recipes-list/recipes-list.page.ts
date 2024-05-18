import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../../models/pizza.model';
import { RecipesService } from '../../Services/recipes.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { RecipesTypes } from '../../utilities/Recipestypes';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.page.html',
  styleUrls: ['./recipes-list.page.scss'],
})
export class RecipesListPage implements OnInit {
  list:IRecipe[]=[];
  isLoading:boolean=false;
  RecipesTypes=[...RecipesTypes];
  selectedType=this.RecipesTypes[0].value;
  constructor(private pizzaRecipesService:RecipesService,private router:Router) { }

  ngOnInit() {
    this.getPizzaList();
  }

  getPizzaList(type:string=this.selectedType){
    this.isLoading=true;
    this.pizzaRecipesService.getRecipesList(type).pipe(
      finalize(()=>this.isLoading=false)
    ).subscribe({
      next:(data)=>{
        this.list=data.recipes;
      }
    })

  }
  onItemClick(item: any) {
    this.router.navigate(['/recipe-details', item.recipe_id]);
  }

  handleChange(value:CustomEvent ){
    this.selectedType=value.detail.value
   this.getPizzaList(this.selectedType)
  }
}