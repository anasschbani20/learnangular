import {Injectable} from "@angular/core";

@Injectable()
export class MyService{

    myGlobalVariable = 'Hello this is my global variable';
    constructor() { }

  changeTheGlobalVariable(value: string) {
    this.myGlobalVariable = value;
  }
}
