import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  myGroup = new FormGroup({
    firstName: new FormControl()
 });
  constructor() { }

  ngOnInit() {
  }

}
