import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()

export class CustomErrorHandler implements ErrorHandler {

  constructor(private snackbar: MatSnackBar, private zone:NgZone) { }

  //unknow is safe than any
  handleError(error: unknown): void {
    this.zone.run(() => {
      this.snackbar.open(
        'Error was detected! we are already working on it!',
        'Close',
        {
          duration: 2000
        }
      );

    })
    console.warn(`Caught by custom Error handler`, error)
  }
}
