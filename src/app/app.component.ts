import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  x;
  y;
  hasilHitung;
  pola = '';
  
  hitung() {
    this.hasilHitung = Math.pow(this.x, this.y);

    if (this.hasilHitung % 2 != 0) {
      this.pola = "Pola A";
    }
    else
    {
      this.pola = "Pola B";
    }
  }
}
