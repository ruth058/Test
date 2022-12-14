import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service'
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogPostComponent } from '../dialog-post/dialog-post.component';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  listBlogs: Array<any> = new Array<any>()
  listComments: Array<any> = new Array<any>()

  constructor(private ServiceService: ServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.ServiceService.GetBlogs().subscribe(data => {
      this.listBlogs = data
    })

  }

  Getcomments(postId: number) {
    this.ServiceService.Getcomments(postId).subscribe(data => {
      this.listComments = data

      const dialogRef = this.dialog.open(DialogPostComponent, {
        data: { list: this.listComments },
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    })
  }

}
