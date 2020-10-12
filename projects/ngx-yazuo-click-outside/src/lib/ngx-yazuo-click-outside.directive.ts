import { Directive, ElementRef, Output, EventEmitter, HostListener, Input } from '@angular/core';
import { BrowserDetectUtils } from './browser-detect.utils';

@Directive({
  selector: '[ngx-yazuo-click-outside]'
})
export class NgxYazuoClickOutsideDirective {
  isIE = BrowserDetectUtils.isBrowserIE();

  constructor(private elementRef: ElementRef) { }

  @Output('ngx-yazuo-click-outside') public clickOutside = new EventEmitter();
  @Input('allowed-clicked-classes') public allowedClickedClasses = [];
  @Input('allowed-clicked-ids') public allowedClickedIds = [];


  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {

    let clickedInside = false;
    const parent = targetElement.parentElement;

    this.allowedClickedClasses.forEach(className => {
      if (targetElement.className === className) {
        clickedInside = true;
      }
    });

    this.allowedClickedIds.forEach(id => {
      if (targetElement.id === id) {
        clickedInside = true;
      }
    });

    if (targetElement.className === this.elementRef.nativeElement.className) {
      clickedInside = true;
    }

    if (this.isIE) {
      const elementsArray = Array.prototype.slice.call(this.elementRef.nativeElement.children, 0);
      elementsArray.forEach((element: any) => {
        if (element.contains(targetElement.parentElement) || element.contains(targetElement)) {
          clickedInside = true;
          return;
        }
      });
    } else {
      for (let i = 0; i < this.elementRef.nativeElement.childNodes.length; i++) {
        if (this.elementRef.nativeElement.childNodes[i].contains(targetElement.parentElement) ||
            this.elementRef.nativeElement.childNodes[i].contains(targetElement)) {
          clickedInside = true;
          return;
        }
      }
    }

    if (!clickedInside) {
      this.clickOutside.emit('outside');
    }
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    const ESCAPE_KEYCODE = '27';
    if (event.code === ESCAPE_KEYCODE) {
      this.clickOutside.emit('esc');
    }
  }
}
