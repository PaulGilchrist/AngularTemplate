
import { BehaviorSubject, throwError as observableThrowError, Observable , of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, retry, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { Address } from '../models/address.model';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
	// Constants
	_maxUserCacheTimeMilliseconds = 3600000;

	// Public variables
	private users = new BehaviorSubject<User[]>([]);
	users$ = this.users.asObservable();

	// Private variables
	_lastUserGetTime: number; // number of milliseconds elapsed since 1 January 1970 00:00:00 UTC
	_usersUrl: string = null;

	// Assumes HTTP_PROVIDERS was added as a provider at a higher level
	constructor(private http: HttpClient) {
		// Initialize with empty arrays
		this.users$ = new BehaviorSubject<User[]>([]);
		// Application should have loaded settings at startup
		this._usersUrl = environment.apiUrl + '/users';
	}

	public getUsers(force: boolean = false): Observable<any> {
		// If the users are less than 1 hour old do not GET them again from the API
		const users = this.users.getValue();
		if(force || users.length === 0 || (this._lastUserGetTime + this._maxUserCacheTimeMilliseconds < Date.now())) {
			// Get users from API
			return this.http.get(this._usersUrl).pipe(
				retry(3),
				tap(data => {
					this.users.next(<User[]>data); // Save the user array inside the service
					this._lastUserGetTime = Date.now(); // Track when the last successful user GET occured
				}),
				catchError(this.handleError)
			);
		} else {
			// Return existing users as an observable
			return of(users);
		}
	}

	public getUserAddresses(user: User): Observable<any> {
		// The token is larger than the entire address payload.
		// If it was a requirement to secure this endpoint, then for performance reasons, it would be best to get all addresses one time
		// Then when looking for the addresses for a single user, do that in memory (but this is a demo, so small API calls are fine)
		const url: string = this._usersUrl + '(' + user.id + ')/addresses';
		return this.http.get(url).pipe(
			retry(3),
			catchError(this.handleError)
		);
	}


	public updateUsers(): Observable<Object> {
		const users = this.users.getValue();
		const modifiedUsers = users.filter(u => u.isDirty===true);
		if(modifiedUsers.length > 0) {
			return this.http.put(this._usersUrl, modifiedUsers).pipe(
				retry(3),
				tap(data => {
					modifiedUsers.forEach(u => u.isDirty = false);
					this.users.next(users);
				}),
				catchError(this.handleError)
			);
		}
	}

	private handleError(error: Response) {
		// In the future, we may send the server to some remote logging infrastructure
		console.error(error);
		return observableThrowError(error || 'Server error');
	}

}
