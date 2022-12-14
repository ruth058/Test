import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-post',
  templateUrl: './dialog-post.component.html',
  styleUrls: ['./dialog-post.component.scss']
})
export class DialogPostComponent implements OnInit {

  listComments: Array<any> = new Array<any>()

  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      debugger
      this.listComments = data.list

     }

  ngOnInit(): void {
  }
  close(): void {
    this.dialogRef.close();
  }

}
 