import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:3000/users"

  constructor(private httpClient:HttpClient) { }
  getUser(): Observable<User[]>{
  return this.httpClient.get<User[]>(this.url)
  }
}

