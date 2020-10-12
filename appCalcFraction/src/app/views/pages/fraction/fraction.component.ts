import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-fraction',
  templateUrl: './fraction.component.html',
  styleUrls: ['./fraction.component.scss']
})
export class FractionComponent implements OnInit {

  formFraction = this.formBuilder.group({
    num: ['', [Validators.required, Validators.nullValidator]],
    den: ['', [Validators.required, Validators.nullValidator]]
  });
  public data: any;
  public formFrac: any[] = [];
  public num: any;
  public den: any;
  public index: number;
  public total: number;
  public equation1: number;
  public maskNum = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
  public maskDen = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
  public newNum: number;
  public newDen: number;
  public rest: number;
  public mdcNum1: number;
  public mdcNum2: number;
  public mdc: number;
  public numFinal: number;
  public denFinal: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    document.getElementById('fraction').style.visibility = 'hidden';
    document.getElementById('chart').style.visibility = 'hidden';
    document.getElementById('btnRebuild').style.visibility = 'hidden';
  }
  mdcFraction(c, d) {
    this.mdcNum1 = c;
    this.mdcNum2 = d;
    while (d !== 0) {
      this.rest = c % d;
      c = d;
      d = this.rest;
    }
    this.mdc = c;
    return c;
  }
  constructFraction() {
    this.formFrac.push(this.formFraction.value);
    this.num = this.formFrac[0].num.replace(/_/i, '');
    this.newNum = parseInt(this.num, 6);
    this.den = this.formFrac[0].den.replace(/_/i, '');
    this.newDen = parseInt(this.den, 6);
    this.index = 100;
    this.equation1 = Math.trunc((this.newNum / this.newDen) * this.index);
    this.total = Math.trunc(Math.abs(this.index - this.equation1));
    this.mdcFraction(this.newNum, this.newDen);
    this.numFinal = this.newNum / this.mdc;
    this.denFinal = this.newDen / this.mdc;
    document.getElementById('formNumDen').style.position = 'absolute';
    document.getElementById('fraction').style.position = 'relative';
    document.getElementById('fraction').style.visibility = 'visible';
    document.getElementById('chart').style.visibility = 'visible';
    document.getElementById('formNum').style.position = 'relative';
    document.getElementById('formNum').style.visibility = 'hidden';
    document.getElementById('formDen').style.position = 'relative';
    document.getElementById('formDen').style.visibility = 'hidden';
    document.getElementById('btnBuild').style.position = 'absolute';
    document.getElementById('btnBuild').style.visibility = 'hidden';
    // document.getElementById('btnClear').style.position = 'absolute';
    // document.getElementById('btnClear').style.visibility = 'hidden';
    document.getElementById('btnRebuild').style.visibility = 'visible';
    this.createChart();
  }
  /*
  clearFraction() {
    this.formFraction = this.formBuilder.group({
      num: ['', [Validators.required, Validators.nullValidator]],
      den: ['', [Validators.required, Validators.nullValidator]]
    });
  }
  */
  newOperation() {
    this.router.navigate(['/operations']);
  }

  createChart() {
    this.data = {
      labels: ['', ''],
      datasets: [
          {
              data: [this.total, this.equation1],
              backgroundColor: [
                  '#FF6384',
                  '#36A2EB'
              ],
              hoverBackgroundColor: [
                  '#FF6384',
                  '#36A2EB'
              ]
          }]};
  }

}
