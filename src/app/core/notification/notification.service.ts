import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) {
  }

  showNotification(message: string): void {
    console.log('NotificationService: ', message);
    this.snackBar.open(message, 'OK', {duration: 5000})
  }
}
