import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterBasic]'
})
export class BetterBasicDirective implements OnInit {
  // custom properties. They can be accessed and set by the user
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'yellow';
  // alternate way to bind to a specific property by deafult
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';


  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {

  }

  @HostListener('mouseenter') mouseover() {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }


  // Host listener allows us to listen to events and make the directive reactive
}
