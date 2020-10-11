import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.scss']
})
export class SubtractionComponent implements OnChanges, OnInit {

  formSubt = this.formBuilder.group({
    num: ['', [Validators.required, Validators.nullValidator]],
    den: ['', [Validators.required, Validators.nullValidator]],
    num2: ['', [Validators.required, Validators.nullValidator]],
    den2: ['', [Validators.required, Validators.nullValidator]]
  });
  public data: any;
  public formFrac: any[] = [];
  public num: any;
  public den: any;
  public num2: any;
  public den2: any;
  public index: number;
  public total: number;
  public equation1: number;
  public maskNum = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
  public maskDen = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
  public newNum: number;
  public newDen: number;
  public newNum2: number;
  public newDen2: number;
  public resultNum: number;
  public resultDen: number;
  public rest: number;
  public mmcNum1: number;
  public mmcNum2: number;
  public mmc: number;
  public simpleFrac: number;
  public simpleNum: number;
  public simpleDen: number;
  public mdcNum1: number;
  public mdcNum2: number;
  public mdc: number;
  public numFinal: number;
  public denFinal: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    document.getElementById('fraction').style.visibility = 'hidden';
    document.getElementById('chart').style.visibility = 'hidden';
    document.getElementById('btnRebuild').style.position = 'absolute';
    document.getElementById('btnRebuild').style.visibility = 'hidden';
    document.getElementById('btnBuild').style.position = 'absolute';
    document.getElementById('btnBuild').style.visibility = 'hidden';
    document.getElementById('btnClear').style.position = 'absolute';
    document.getElementById('btnClear').style.visibility = 'hidden';
    document.getElementById('formNum2').style.position = 'absolute';
    document.getElementById('formNum2').style.visibility = 'hidden';
    document.getElementById('formDen2').style.position = 'absolute';
    document.getElementById('formDen2').style.visibility = 'hidden';
    document.getElementById('btnSubt').style.position = 'relative';
  }
  mmcFraction(a, b) {
    this.mmcNum1 = a;
    this.mmcNum2 = b;
    while (b !== 0) {
      this.rest = a % b;
      a = b;
      b = this.rest;
    }
    this.mmc = (this.mmcNum1 * this.mmcNum2) / a;
    return a;
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
  subtFraction() {
    document.getElementById('formNum').style.position = 'absolute';
    document.getElementById('formNum').style.visibility = 'hidden';
    document.getElementById('formDen').style.position = 'absolute';
    document.getElementById('formDen').style.visibility = 'hidden';
    document.getElementById('formNum2').style.position = 'relative';
    document.getElementById('formNum2').style.visibility = 'visible';
    document.getElementById('formDen2').style.position = 'relative';
    document.getElementById('formDen2').style.visibility = 'visible';
    document.getElementById('btnBuild').style.position = 'relative';
    document.getElementById('btnBuild').style.visibility = 'visible';
    document.getElementById('btnClear').style.position = 'relative';
    document.getElementById('btnClear').style.visibility = 'visible';
    document.getElementById('btnSubt').style.visibility = 'hidden';
  }
  constructFraction() {
    this.formFrac.push(this.formSubt.value);
    this.num = this.formFrac[0].num.replace(/_/i, '');
    this.newNum = parseInt(this.num, 6);
    this.den = this.formFrac[0].den.replace(/_/i, '');
    this.newDen = parseInt(this.den, 6);
    this.num2 = this.formFrac[0].num2.replace(/_/i, '');
    this.newNum2 = parseInt(this.num2);
    this.den2 = this.formFrac[0].den2.replace(/_/i, '');
    this.newDen2 = parseInt(this.den2);
    this.mmcFraction(this.newDen, this.newDen2);
    this.index = 100;
    this.resultNum = ((this.mmc / this.newDen) * this.newNum) - ((this.mmc / this.newDen2) * this.newNum2);
    this.resultDen = this.mmc;
    this.equation1 = Math.trunc((this.resultNum / this.resultDen) * this.index);
    this.total = Math.trunc(Math.abs(this.index - this.equation1));
    this.mdcFraction(this.resultNum, this.resultDen);
    this.numFinal = this.resultNum / this.mdc;
    this.denFinal = this.resultDen / this.mdc;
    document.getElementById('formNumDen').style.position = 'absolute';
    document.getElementById('fraction').style.position = 'relative';
    document.getElementById('fraction').style.visibility = 'visible';
    document.getElementById('chart').style.position = 'relative';
    document.getElementById('chart').style.visibility = 'visible';
    document.getElementById('formNum').style.position = 'relative';
    document.getElementById('formDen').style.position = 'relative';
    document.getElementById('formNum2').style.position = 'relative';
    document.getElementById('formNum2').style.visibility = 'hidden';
    document.getElementById('formDen2').style.position = 'relative';
    document.getElementById('formDen2').style.visibility = 'hidden';
    document.getElementById('btnBuild').style.position = 'absolute';
    document.getElementById('btnBuild').style.visibility = 'hidden';
    document.getElementById('btnClear').style.position = 'absolute';
    document.getElementById('btnClear').style.visibility = 'hidden';
    document.getElementById('btnRebuild').style.position = 'relative';
    document.getElementById('btnRebuild').style.visibility = 'visible';
    document.getElementById('btnSubt').style.position = 'absolute';
    this.createChart();
  }
  /*
  clearFraction() {
    this.formSubt = this.formBuilder.group({
      num: ['', [Validators.required, Validators.nullValidator]],
      den: ['', [Validators.required, Validators.nullValidator]],
      num2: ['', [Validators.required, Validators.nullValidator]],
      den2: ['', [Validators.required, Validators.nullValidator]]
    });
  }
  */
  newOperation() {
    this.router.navigate(['/operations']);
  }
  createChart() {
    this.data = {
      labels: ['Denominador', 'Numerador'],
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
