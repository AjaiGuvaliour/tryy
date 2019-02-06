import { Component, OnInit, Input } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

import { RouterStateSnapshot, ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';
import { AuthGuard } from '../sharedModule/Services/auth.guard';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() isVisible : boolean = true;
  visibility = 'shown';
  routerValues : any=[];
  sideNavOpened: boolean = true;
  matDrawerOpened: boolean = false;
  matDrawerShow: boolean = true;
  sideNavMode: string = 'side';

  ngOnChanges() {
   this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

	constructor(private media: MediaObserver,private routes: AuthGuard) { 
        
    }

	ngOnInit() {
		this.media.media$.subscribe((mediaChange: MediaChange) => {
            this.toggleView();
        });
	}
    getRouteAnimation(outlet) {

       return outlet.activatedRouteData.animation;
       //return outlet.isActivated ? outlet.activatedRoute : ''
    }

	toggleView() {
		if (this.media.isActive('gt-md')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = true;
            this.matDrawerOpened = false;
            this.matDrawerShow = true;
        } else if(this.media.isActive('gt-xs')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = false;
            this.matDrawerOpened = true;
            this.matDrawerShow = true;
        } else if (this.media.isActive('lt-sm')) {
            this.sideNavMode = 'over';
            this.sideNavOpened = false;
            this.matDrawerOpened = false;
            this.matDrawerShow = false;
        }
	}

}
