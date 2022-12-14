import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-user-detiles',
  templateUrl: './dialog-user-detiles.component.html',
  styleUrls: ['./dialog-user-detiles.component.scss']
})
export class DialogUserDetilesComponent implements OnInit {
  userDetails: any

  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      debugger
    this.userDetails = data.list[0]
  }

  ngOnInit(): void {
  }

}
