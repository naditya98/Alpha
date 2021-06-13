import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alpha';
  data=[
    {
      cardcolor:"bg-primary",
      cardtype:"Primary Card"
    },
    {
      cardcolor:"bg-warning",
      cardtype:"Warning Card"
    },
    {
      cardcolor:"bg-success",
      cardtype:"Success Card"
    },
    {
      cardcolor:"bg-danger",
      cardtype:"Danger Card"
    }
  ]
}
