import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Nancy } from '../nancy'

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  homepage: Nancy;

  constructor(private http: HttpClient) {
    this.homepage = new Nancy("", "", "")
  }

  nancyRequest() {
    interface ApiResponse {
      avatar_url: any;
      login: string;
      repos: string;
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/Nancy-Muthinzi?access_token=" + environment.apiUrl).toPromise().then(response => {
        this.homepage.avatar_url= response.avatar_url
        this.homepage.login= response.login
        this.homepage.repos=response.repos
        console.log(this.homepage.repos)
        resolve()
      },
      error=>{
        this.homepage.avatar_url="not found"
        this.homepage.login="not found"
        this.homepage.repos="not found"
        reject(error)
      }
      )
    })
    return Promise
  }
}
