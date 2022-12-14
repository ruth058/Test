import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceService } from 'src/app/service.service'
import { DialogUserDetilesComponent } from '../dialog-user-detiles/dialog-user-detiles.component';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {

  listUsers: Array<any> = new Array<any>()
  listTodos: Array<any> = new Array<any>()
  show: boolean = false
  userDetails: any
  constructor(private ServiceService: ServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    debugger
    this.ServiceService.getUsers().subscribe(data => {
      this.listUsers = data
    },
      err => {
        console.log("error")
      }
    )

  }

  GetTodos(userId: number) {
    debugger
    this.ServiceService.GetTodos(userId).subscribe(data => {
      this.listTodos = data
      this.show = true
    },
      err => {
        this.show = false
        console.log("err")
      })
  }

  GetDetails(userId: number) {

    // כמו שאמרתי לכן בעת ההגשה, עשיתי קריאה מיותרת. ופשוט הצורה הנכונה והיעילה,
    //היא לפלטר את הרשימה שכבר קיימת בקומפוננטה.
    //שורה 48 היא השורה שהייתי צריכה לרשום במקום לבצע קריאה. פתיחת הדיאלוג נשארת אותו דבר.  
    // this.userDetails= this.listUsers.filter(x=>x.id=userId)
    // const dialogRef = this.dialog.open(DialogUserDetilesComponent, {
    //   data: { list: this.userDetails },
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
    this.ServiceService.GetDetails(userId).subscribe(data => {
      this.userDetails = data
      const dialogRef = this.dialog.open(DialogUserDetilesComponent, {
        data: { list: this.userDetails },
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
      
    },
      err => {
        console.log("שגיאה בשליפת פרטי יוזר")
      })
  }


}
