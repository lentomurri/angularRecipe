import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeFormComponent } from './recipe-book/recipe-list/recipe-form/recipe-form.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './recipe-book/recipe/recipe.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { SelectRecipeInfoComponent } from './recipe-book/recipe-list/select-recipe-info/select-recipe-info.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { ShoppingComponent } from './shopping-list/shopping/shopping.component';
import { RecipeEditComponent } from './recipe-book/recipe-list/recipe-edit/recipe-edit.component';

// ROUTING

const appRoutes: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: '', component: WelcomeComponent},
    {path: 'recipes', component: RecipeBookComponent, children: [
      {path: '', component: RecipeListComponent, children: [
        {path: '', component: SelectRecipeInfoComponent},
        {path: 'detail/:id', component: RecipeDetailComponent},
        {path: 'detail/:id/edit', component: RecipeEditComponent},
        {path: 'add', component: RecipeFormComponent}
      ]},
      {path: ':id', component: RecipeComponent}
  ]},
    {path: 'shopping', component: ShoppingListComponent, children: [
      {path: '', component: ShoppingComponent, outlet: 'main'},
      {path: '', component: ShoppingEditComponent}
    ]},
  ]},
  {path: 'not-found', component: PageNotFoundComponent, data: {message: 'Page not found'}},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule ({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
