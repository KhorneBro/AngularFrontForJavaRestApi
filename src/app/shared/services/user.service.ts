import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const USER_API = 'http://localhost:8080/api/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  allUser(): Observable<any> {
    return this.http.get(USER_API + 'all');
  }

  getById(id): Observable<any> {
    return this.http.get(USER_API + id);
  }

  deleteUser(id): Observable<any> {
    return this.http.delete(USER_API + 'delete/' + id);
  }

  createUser(data): Observable<any> {
    return this.http.post(USER_API + 'create', data);
  }

  updateUser(id, data): Observable<any> {
    return this.http.put(USER_API + 'update/' + id, data);
  }
}


