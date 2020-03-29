import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  calc() {
    this.router.navigate(['/fraction']);
  }
  plus() {
    this.router.navigate(['/development']);
  }
  minus() {
    this.router.navigate(['/development']);
  }
  times() {
    this.router.navigate(['/development']);
  }
  divide() {
    this.router.navigate(['/development']);
  }
}
