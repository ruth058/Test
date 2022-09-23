import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myFunction(elem: HTMLElement) {
    debugger
    if (elem.className === "topnav") {
      elem.className += " responsive";
    } else {
      elem.className = "topnav";
    }
  }
}
