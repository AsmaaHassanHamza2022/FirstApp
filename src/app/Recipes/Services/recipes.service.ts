import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecipe } from '../models/pizza.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
   BASE_API_URl:string='https://forkify-api.herokuapp.com/api/'
  constructor(private http: HttpClient) {}

  getRecipesList(
    RecipeType: string
  ): Observable<{ count: number; recipes: IRecipe[] }> {
    return this.http.get<{ count: number; recipes: IRecipe[] }>(
      this.BASE_API_URl+'search?q=' + RecipeType
    );
  }

  getRecipeById(id: string): Observable<{ recipe: IRecipe }> {
    return this.http.get<{ recipe: IRecipe }>(
      this.BASE_API_URl+'/get?rId=' + id
    );
  }
}
