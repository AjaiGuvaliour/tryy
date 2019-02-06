import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'jabs-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
	isOpen: boolean = false;
    
  	

  	@Input() currentUser = null;
  	@HostListener('document:click', ['$event', '$event.target'])
  	onClick(event: MouseEvent, targetElement: HTMLElement) {
    	if (!targetElement) {
     		return;
    	}

    	const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    	if (!clickedInside) {
      		this.isOpen = false;
    	}
  	}
  	
    
  	constructor(private elementRef: ElementRef,private router: Router) { }


  	ngOnInit() {
	}

	logOut(){
		localStorage.clear();
		this.router.navigate(['/login'])

	}
	  

}
