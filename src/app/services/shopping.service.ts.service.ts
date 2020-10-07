import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})

export class ShoppingService {
  private ingredients: Ingredient[] = [new Ingredient('artichoke', 500, 'g'), new Ingredient('tomatoes', 2, 'each')];

  private list = this.ingredients.map((e) => e.name);
  private selectedIngredient = new BehaviorSubject<Ingredient>(undefined);
  selectIngredient = this.selectedIngredient.asObservable();
  editedIngredient = new BehaviorSubject<boolean>(false);
  editingIngredient = this.editedIngredient.asObservable();

  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  getList(): string[] {
    return this.list;
  }

  getSelectedIngredient(): Ingredient {
    return this.selectedIngredient.value;
  }

  setSelectedIngredient(ingredient: Ingredient): void {
    this.selectedIngredient.next(ingredient);
  }

  getEditedIngredient(): boolean {
    return this.editedIngredient.value;
  }

  setEditedIngredient(value: boolean): void {
    this.editedIngredient.next(value);
  }

  addIngredient(ingredient: Ingredient): void {
    if (this.list.indexOf(ingredient.name) > -1) {
      for (const item of this.ingredients) {
        if (item.name === ingredient.name) {
          item.amount += ingredient.amount;
        }
      }
    } else {
      this.ingredients.push(ingredient);
    }
  }

  editIngredient(selectedIngredient: Ingredient, updateIngredient: Ingredient): void {
    for (const ingredient of this.ingredients) {
      if (ingredient === selectedIngredient) {
        ingredient.name = updateIngredient.name;
        ingredient.amount = updateIngredient.amount;
        ingredient.measure = updateIngredient.measure;
      }
    }
    }

  }

