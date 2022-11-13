import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.scss']
})
export class ChildcomponentComponent implements OnInit {

  @Input() parentData: any;
  @Output() askChangingUserFromChild = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  change() {
    this.askChangingUserFromChild.emit();
  }
}
