import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'recipes-list',
    pathMatch:'full'
  },
  
  {
    path: 'recipes-list',
    loadChildren: () => import('./Recipes/pages/recipes-list/recipes-list.module').then( m => m.RecipesListPageModule)
  },
  {
    path: 'recipe-details/:id',
    loadChildren: () => import('./Recipes/pages/recipe-details/recipe-details.module').then( m => m.RecipeDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
