import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.navHome();
  }
  // Function redirect home
  navHome() {
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 3000);
  }
  // Function redirect home

}
