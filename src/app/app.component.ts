import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  query,
} from '@angular/animations'
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  

})
export class AppComponent {
  constructor(private routes : Router){

  }
  title = 'app';
  getRouteAnimation(outlet) {
      return outlet.activatedRouteData.animation
  }
}
