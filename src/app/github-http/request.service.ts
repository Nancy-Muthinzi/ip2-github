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
    this.homepage = new Nancy("", "")
  }

  nancyRequest() {
    interface ApiResponse {
      avatar_url: string;
      login: string;
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/Nancy-Muthinzi?access_token=" + environment.apiUrl).toPromise().then(response => {
        this.homepage.avatar_url= response.avatar_url
        this.homepage.login= response.login
        resolve()
      },
      error=>{
        this.homepage.avatar_url="not found"
        this.homepage.login="try again"
        reject(error)
      }
      )
    })
    return Promise
  }
}
