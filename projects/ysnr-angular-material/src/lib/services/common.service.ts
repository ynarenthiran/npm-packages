import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class YSNRCommonService {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  message(status: string = 'info' || 'success' || 'danger' || 'warning', message: any) {
    this.snackBar.open(message, undefined, {
      duration: 1000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: status
    });
  }

  get isHandset(): Observable<boolean> {
    return this.breakpointObserver.observe(Breakpoints.XSmall)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

  get layoutClass(): Observable<any> {
    const layouts: any = [
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ];
    return this.breakpointObserver.observe(layouts)
      .pipe(
        map(state => {
          if (state.breakpoints[Breakpoints.XSmall]) {
            return 'small-mobile';
          } else if (state.breakpoints[Breakpoints.Small]) {
            return 'mobile';
          } else if (state.breakpoints[Breakpoints.Medium]) {
            return 'tablet';
          } else if (state.breakpoints[Breakpoints.Large]) {
            return 'laptop';
          } else if (state.breakpoints[Breakpoints.XLarge]) {
            return 'desktop';
          } else {
            return null;
          }
        })
      );
  }
}
