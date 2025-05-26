import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../model/user.model';
@Injectable({
    providedIn: 'root'
})
export class UsersService {
    readonly httpUrl: string = 'https://jsonplaceholder.typicode.com/users';
    http = inject(HttpClient);
    users =signal<User[]>([]);



    fetchUsersData(): Observable<User[]> {
        return this.http.get<User[]>(this.httpUrl).pipe(
            tap(data => {this.users.set(data.map(user => ({ id: user.id, name:user.name }))); // Assuming User has an 'id' property
                console.log('Data fetched from HTTP:', data);
            }),
        );
    }
}