import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'https://fakestoreapi.com/users';

  constructor(private http: HttpClient) {}

  
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  
  getUser(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }



  createUser(postData: any): Observable<any> {
    return this.http.post(this.apiUrl, postData);
  }


  updateUser(id: number, postData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, postData);
  }

 
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
