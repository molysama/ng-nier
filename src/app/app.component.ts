import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'nier-project';

  isChecked = false

  showChecked() {
    console.log(this.isChecked)
  }
}
