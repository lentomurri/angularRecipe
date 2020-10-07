import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';


import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { GameControlComponent } from './game-control/game-control.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { ShoppingService } from './services/shopping.service.ts.service';
import { RecipeComponent } from './recipe-book/recipe/recipe.component';
import { RecipeFormComponent } from './recipe-book/recipe-list/recipe-form/recipe-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { SelectRecipeInfoComponent } from './recipe-book/recipe-list/select-recipe-info/select-recipe-info.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './home/footer/footer.component';
import { ShoppingComponent } from './shopping-list/shopping/shopping.component';
import { RecipeEditComponent } from './recipe-book/recipe-list/recipe-edit/recipe-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingComponent,
    ShoppingEditComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    GameControlComponent,
    DropdownDirective,
    RecipeComponent,
    RecipeFormComponent,
    PageNotFoundComponent,
    HomeComponent,
    SelectRecipeInfoComponent,
    WelcomeComponent,
    FooterComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [ShoppingService, AuthService, AuthGuard, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
