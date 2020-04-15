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

    let a, b;
    if (this. x > this.y)
    {
      a = this.x;
      b = this.y;
    }
    else
    {
      a = this.y;
      b = this.x;
    }

    if (this.hasilHitung % 2 != 0) {
      this.pola += "Pola A<br/>"

      for (let i = a, j = 1; i > 0 || j <= b; i--, j++) {
        if (i > 0)
        {
          for (let k = 0; k < i; k++) {
            this.pola += "*";
          }
        }
        
        if (j <= b)
        {
          for (let k = 0; k < j; k++) {
            this.pola += "o";
          }
        }
        this.pola += "<br/>";
      }
    }
    else
    {
      this.pola += "Pola B<br/>";

      for (let i = a - 1; i < this.hasilHitung; i++) {
        for (let j = 0; j <= i; j++) {
          this.pola += "*";
        }
        this.pola += "<br/>";
      }
    }
  }

  clear() {
    this.x = "";
    this.y = "";
    this.hasilHitung = 0;
    this.pola = "";
  }
}
