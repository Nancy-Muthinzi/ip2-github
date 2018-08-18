import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private user: string;
  private repo: string;

  get() {
    return this.http.get(environment.apiUrl)

  }
  constructor(private http: HttpClient) {
    console.log("")
    this.user = 'Nancy-Muthinzi';
  }
  getUserInfo() {
    return this.http.get("https://api.github.com/users/" + this.user).map(res => res.json());
  }
}
