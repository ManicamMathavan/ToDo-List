import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../model/user.model';// Assuming you have a User model defined

@Injectable({
    providedIn: 'root'
})
export class InjectService {
    readonly httpUrl: string = 'https://jsonplaceholder.typicode.com/posts';
    http = inject(HttpClient);
    users = signal<User[] | null>(null);
    sayHello() : Observable<string>{
        return new Observable<string>(observer => {
            observer.next('Hello from InjectService!');
            setTimeout(()=>{observer.next('This is a second message.');
            observer.complete();},2000)
        });
    }
    test() : void{
        console.log('test method called');
    }

    getHttpData(): Observable<User[]> {
        return this.http.get<User[]>(this.httpUrl).pipe(
            tap(data => {this.users.set(data.map(user => ({ id: user.id }))); // Assuming User has an 'id' property
                console.log('Data fetched from HTTP:', data);
            }),
        );
    }
}