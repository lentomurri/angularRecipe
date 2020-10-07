import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['../app.component.css', './game-control.component.css']
})
export class GameControlComponent implements OnInit {
  currentNumber: number;
  interval;

  @Input() disabled: boolean;
  @Output() data = new EventEmitter<number>();

  startGame() {
    if (this.disabled === true) {
      this.stopGame();
    }
    this.interval = setInterval(() => {
      this.currentNumber = Math.floor(Math.random() * (100 - 1 ));
      this.data.emit(this.currentNumber);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
