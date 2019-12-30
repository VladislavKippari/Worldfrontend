import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class CustomSnackbarService {
  authForm: FormGroup;
  constructor(
    public snackBar: MatSnackBar

  ) {

  }

  public open(message, action = 'Close', duration = 6000, verticalPosition: 'top', horizontalPosition: 'center'
  ) {

    this.snackBar.open(message, action, { duration, verticalPosition, horizontalPosition });


  }
}