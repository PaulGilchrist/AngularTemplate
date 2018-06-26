import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common' ;

import { IdentityService } from '../../services/identity.service';

@Component({
	selector: 'app-nav-top',
	styleUrls: ['./app-nav-top.component.css'],
	templateUrl: './app-nav-top.component.html'
})
export class AppNavTopComponent implements OnInit {

	public shrinkNavbar = false;

	constructor(private _location: Location, private _router: Router, public identityService: IdentityService) {}

	onScroll(event: any): void {
		// Shrink the header top and bottom padding when scrolling beyond 300px
		this.shrinkNavbar = ((window.pageYOffset || document.documentElement.scrollTop) > 300);
	}


	ngOnInit(): void {
	}

	currentPage(path: string): boolean {
		let result = false;
		const locationPath = this._location.path();
		if (path.length === 0) {
			// Root
			result = (locationPath.length === 0);
		} else {
			// Does the current path start with "path"?
			result = (locationPath.indexOf(path) === 0);
		}
		return result;
	}

	login(): void {
		this.identityService.getUser().subscribe(user => {
			console.log(this.identityService.user);
		}, error => {
			console.log(error);
		});
	}

	logout(): void {
		this.identityService.clearToken();
		this._router.navigate(['home']);
	}

}