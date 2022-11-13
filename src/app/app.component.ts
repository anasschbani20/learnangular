import { Component } from '@angular/core';
import {UserService} from "./services/UserService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Anass CHBANI';
  images = [
    'https://loremflickr.com/320/240',
    'https://loremflickr.com/320/240/dog',
    'https://loremflickr.com/g/320/240/paris',
    'https://loremflickr.com/320/240/brazil,rio',
    ]
  itemImageUrl = this.images[0];
  imageIndex = 0;
  italic_style = false;
  customStyle = false;
  calledPhone = '';
  checkingNumber = 0;
  monthNumber = 1;
  users = [
    { name: 'Anass', age: 27 },
    { name: 'Ahmed', age: 30 },
    { name: 'Mohamed', age: 35 },
    { name: 'Ali', age: 40 },
    { name: 'Youssef', age: 45 },
    { name: 'Hassan', age: 50 },
  ]
  user = this.users[0];
  usersFromBackend: any = [];

  constructor(private usersServices: UserService) {
    this.getUsersFromBackend();
  }

  getRandomImage() {
    this.itemImageUrl = this.images[Math.floor(Math.random() * this.images.length)];
  }

  callPhone(value: any){
    this.calledPhone = value;
  }

  changeUser(){
    this.user = this.users[Math.floor(Math.random() * this.users.length)];
  }

  getUsersFromBackend(){
    this.usersServices.getUsers().subscribe((result: any) => {
      this.usersFromBackend = result.data;
      console.log('usersFromBackend', this.usersFromBackend);
    });
  }
}
