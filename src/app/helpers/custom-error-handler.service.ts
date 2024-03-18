import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {

  constructor(private snackbar: MatSnackBar) { }

  //unknow is safe than any
  handleError(error: unknown): void {
    this.snackbar.open(
      'Error was detected! we are already working on it!',
      'Close',
      {
        duration: 2000
      }
    );
    console.warn(`Caught by custom Error handler`, error)
  }
}
