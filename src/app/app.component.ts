import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  onCheckboxClick($event, element: HTMLElement) {
    $event.target.checked ? element.classList.add('active') : element.classList.remove('active');
  }
}
