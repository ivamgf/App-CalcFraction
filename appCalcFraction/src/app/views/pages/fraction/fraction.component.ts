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
  public num: number;
  public den: number;
  public index: number;
  public total: number;
  public equation1: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    document.getElementById('fraction').style.visibility = 'hidden';
    document.getElementById('chart').style.visibility = 'hidden';
  }

  constructFraction() {
    this.formFrac.push(this.formFraction.value);
    this.num = this.formFrac[0].num;
    this.den = this.formFrac[0].den;
    this.index = 100;
    this.equation1 = (this.num / this.den) * this.index;
    this.total = this.index - this.equation1;
    document.getElementById('fraction').style.position = 'relative';
    document.getElementById('fraction').style.visibility = 'visible';
    document.getElementById('chart').style.visibility = 'visible';
    this.createChart();
  }

  clearFraction() {
    location.reload();
  }

  createChart() {
    this.data = {
      // labels: ['Numerador','Denominador'],
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
