import { Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive( {
  selector: '[appDropdown]'
})

export class DropdownDirective {
  // assigns the class dynamically by associating it with the condition
  @HostBinding('class.open') isOpen = false;

  // listens to events and reacts to them
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  constructor() {
  }

}
