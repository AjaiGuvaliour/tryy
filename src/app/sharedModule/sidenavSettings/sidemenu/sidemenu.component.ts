import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jabs-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

    @Input() iconOnly:boolean = false;
    menus : any;
    constructor() {
      this.menus = JSON.parse(localStorage.getItem('token'))['menuDetails']['sidemenu'];
     }

    ngOnInit() {
    }

}
