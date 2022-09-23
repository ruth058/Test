import { Component } from '@angular/core';
import { ConverterService } from './converter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test';
  // constructor() {
  //   var myHeaders = new Headers();
  //   myHeaders.append("apikey", "mbjtRmXPDz65jrOCHU4VvaMaFEqlLo2u");

  //   var requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow',
  //     headers: myHeaders
  //   };

  //   fetch("https://api.apilayer.com/currency_data/list", requestOptions)
  //     .then(response => response.text())
  //     .then(result => console.log(result))
  //     .catch(error => console.log('error', error));
  // }
 
}
