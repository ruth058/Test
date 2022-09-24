import { Component, OnInit } from '@angular/core';
import { map, UnsubscriptionError } from 'rxjs';
import { ConverterService } from 'src/app/converter.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { ConverterService } from './converter.service'
@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})

export class CurrencyConverterComponent implements OnInit {

  public form: FormGroup;
  listCurrency: Array<Currency> = new Array<Currency>()
  SelectedCurrency1: Currency
  SelectedCurrency2: Currency
  AmountAfterConversion: number
  Quantity: string
  showAnswer: boolean = false
  constructor(private formBuilder: FormBuilder, private route: Router, public ConverterSerfvice: ConverterService) {
    this.form = this.createFormGrupe(formBuilder)

  }


  createFormGrupe(FormBuilder: FormBuilder) {
    return FormBuilder.group({
      Quantity: ['', []],
      Currency2: ['', []],
      Currency1: ['', []]

    })
  }

  ngOnInit(): void {
    debugger
    this.ConverterSerfvice.getListCurrencies().subscribe(
      data => {
        debugger
        // this.listCurrency = data.rates
        // this.listCurrency = data.rates.map((Object)item => new Currency(item))
        debugger
        this.listCurrency = data.conversion_rates

        this.listCurrency = Object.keys(data.conversion_rates).map(item => new Currency(item, data.conversion_rates[item]));


        debugger
      },
      err => {
        debugger
        var aa = err
      }
    )


  }

  // from()
  // {
  //   return this.from
  // }

  //לבדוק שימוש בטופס
  converter() {
    this.showAnswer = false
    if (this.SelectedCurrency1 != undefined && this.SelectedCurrency2 != undefined && this.Quantity != undefined && this.Quantity != "") {

      this.AmountAfterConversion = (this.SelectedCurrency2.value / this.SelectedCurrency1.value) * +this.Quantity
      this.showAnswer = true
      this.ConverterSerfvice.listhistory.push(this.Quantity + " " + this.SelectedCurrency1.country + " = " + this.AmountAfterConversion.toFixed(2) + " " + this.SelectedCurrency2.country)
      debugger
      sessionStorage.setItem('listhistory', JSON.stringify(this.ConverterSerfvice.listhistory))

    
    }

  }
}

export class Currency {
 
  constructor(public country: string, public value: number) {

  }
}
