import { Directive, HostListener, ElementRef } from "@angular/core";

@Directive({
  selector: "[appHoverHighlight]"
})
export class HoverHighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight("#dedede");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
