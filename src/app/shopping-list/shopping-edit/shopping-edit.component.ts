import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

// MODELS
import { Ingredient} from '../../models/ingredient.model';

// SERVICES
import { ShoppingService } from 'src/app/services/shopping.service.ts.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingService: ShoppingService) { }

  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;
  @ViewChild('measureInput') measureRef: ElementRef;

  ingredients: Ingredient[];
  currentIngredient: Ingredient;

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();

    this.currentIngredient = this.shoppingService.getSelectedIngredient();

    this.shoppingService.selectIngredient.subscribe(
      (ingredient: Ingredient) => {
        this.currentIngredient = ingredient;
      }
    );

    this.shoppingService.editingIngredient.subscribe(
      (value: boolean) => {
        if (value === true) {
          this.nameRef.nativeElement.value = this.currentIngredient.name;
          this.amountRef.nativeElement.value = this.currentIngredient.amount;
          this.measureRef.nativeElement.value = this.currentIngredient.measure;
        }
      }
    );
  }

  onInput(form: NgForm): void {
    const name = this.nameRef.nativeElement.value;
    const amount = this.amountRef.nativeElement.value;
    const measure = this.measureRef.nativeElement.value;
    const updatedIngredient = new Ingredient(name, amount, measure);

    if (this.shoppingService.getEditedIngredient() === true) {
      this.shoppingService.editIngredient(this.currentIngredient, updatedIngredient);
      this.shoppingService.setEditedIngredient(false);
    }
    else {
      this.shoppingService.addIngredient(updatedIngredient);
    }
    form.reset();
  }

  onDelete(form: NgForm): void {
    this.shoppingService.setSelectedIngredient(undefined);
    form.reset();
  }

  onClear(form: NgForm): void {
    form.reset();
  }
}
