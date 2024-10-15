import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private snack: MatSnackBar
  ) { }

  showNotification( message: string ) {
    this.snack.open( message, "", { verticalPosition: "top", duration: 1500 } ) 
  }
}
