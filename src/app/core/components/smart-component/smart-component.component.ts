import { Injectable, OnDestroy } from "@angular/core";
import { Subject, takeUntil } from "rxjs";

@Injectable({
  providedIn: "root",
})
export abstract class SmartComponent implements OnDestroy {
  private readonly unsubscribes$ = new Subject<void>();
  private readonly subClassNgOnDestroy: Function;

  constructor() {
    this.subClassNgOnDestroy = this.ngOnDestroy;
    this.ngOnDestroy = () => {
      this.subClassNgOnDestroy();
      this.unsubscribes();
    };
  }

  ngOnDestroy(): void {}

  protected untilComponentDestroy() {
    return takeUntil(this.unsubscribes$);
  }
  private unsubscribes() {
    if (this.unsubscribes$.closed) {
      return;
    }
    this.unsubscribes$.next();
    this.unsubscribes$.complete();
  }
}
