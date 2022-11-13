import { Component, OnInit } from '@angular/core';
import {MyService} from "../services/MyService";

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {

  constructor(public myService: MyService) { }

  ngOnInit(): void {
  }

}
