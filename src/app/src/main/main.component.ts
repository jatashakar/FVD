import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
<div>
<nav class ='navbar navbar-default'>
<div class = 'conrainer-fluid'>
<a class='navbar-brand'>{{pageTitle}}</a>
<ul class = 'nav navbar-nav'>
<li><a [routerLink]="['/welcome']">Home</a></li>
<li><a [routerLink]="['/products']">Product List</a></li>
</ul>
</div>
</nav>
<div class= 'container'>
<router-outlet></routrer-outlet>
</div>
  </div>
  `,
  // templateUrl: './main.component.html',
  // styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
