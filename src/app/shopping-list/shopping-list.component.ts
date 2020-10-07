import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['../app.component.css', './shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

}
