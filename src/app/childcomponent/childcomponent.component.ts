import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyService} from "../services/MyService";

@Component({
  selector: 'app-child-component',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.scss']
})
export class ChildcomponentComponent implements OnInit {

  @Input() parentData: any;
  @Output() askChangingUserFromChild = new EventEmitter();

  constructor(public myService: MyService) { }

  ngOnInit(): void {
  }

  change() {
    this.askChangingUserFromChild.emit();
  }

  changeTheGlobalVariable() {
    // You can do it this way
    this.myService.myGlobalVariable = 'I changed the global variable';
    // Or this way
    this.myService.changeTheGlobalVariable('I changed the global variable');
  }
}
