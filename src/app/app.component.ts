import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  imageUrl: string = '';

  constructor() {}
  download: string = '';
  size: string = '';
  text: string = '';
  format: string = '';
  bgcolor: string = '';
  buttonGenerate() {
    this.imageUrl =
      'http://api.qrserver.com/v1/create-qr-code/?' +
      this.size +
      'x' +
      this.size +
      '&data=' +
      this.text +
      '&format=' +
      this.format +
      '&bgcolor=' +
      this.bgcolor;
    this.download = 'Click image to download';
  }
}
