import { Directive, Optional, Self } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
  
  selector: "input_directive"
})
export class InputDirective {
  constructor(@Optional() @Self() public ngControl: NgControl) {}
}
