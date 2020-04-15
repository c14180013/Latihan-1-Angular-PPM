import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'C14180013';

  x;
  y;
  hasilHitung = 0;
  pola = '';
  
  hitung() {
    this.hasilHitung = Math.pow(this.x, this.y);
    this.pola = "Hasil: " + this.hasilHitung + "<br/>";

    if (this.hasilHitung % 2 != 0) {
      this.pola += "Pola A<br/>"

      
    }
    else
    {
      this.pola = "Pola B<br/>";

      for (let i = this.y; i < this.hasilHitung; i++) {
        for (let j = 0; j < i; j++) {
          this.pola += "*";
        }
        this.pola += "<br/>";
      }
    }
  }

  clear() {
    this. x= "";
    this.y = "";
    this.hasilHitung = 0;
  }
}
