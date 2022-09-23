import { Component, OnInit } from '@angular/core';
import { ConverterService } from 'src/app/converter.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  listhistory: Array<String> = new Array<String>()
  constructor(public ConverterSerfvice: ConverterService) { }

  ngOnInit(): void {
    this.ConverterSerfvice.listhistory = JSON.parse( sessionStorage.getItem('listhistory')!)
    this.listhistory = this.ConverterSerfvice.listhistory
  }

}
