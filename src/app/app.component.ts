import { Component } from '@angular/core';

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

  getRandomImage() {
    this.itemImageUrl = this.images[Math.floor(Math.random() * this.images.length)];
  }

  callPhone(value: any){
    this.calledPhone = value;
  }

}
