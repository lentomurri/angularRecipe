import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component ({
  selector: 'app-header',
  templateUrl : 'header.component.html',
  styleUrls: ['header.component.css', '../app.component.css']
})

export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() whichApp = new EventEmitter<string>();

  turnSwitch(event: string): void {
    this.whichApp.emit(event);
  }

  constructor() {

  }
  ngOnInit(): void {}
}
