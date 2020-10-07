import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingService } from 'src/app/services/shopping.service.ts.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  constructor(private shoppingService: ShoppingService) {
  }


  ingredients = this.shoppingService.getIngredients();
  index: number;
  selection: Ingredient;

  onAdd(event: Ingredient): void {
    this.shoppingService.addIngredient(event);
  }

  onSelect(choice: Ingredient, index: number): void {
    this.index = index;
    this.selection = choice;
    this.shoppingService.setSelectedIngredient(choice);
  }

  onEdit(): void {
    this.shoppingService.setEditedIngredient(true);
  }

  onDelete(): void {
    this.ingredients.splice(this.index, 1);
  }

  ngOnInit(): void {
  }

}
