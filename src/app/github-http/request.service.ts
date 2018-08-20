import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment.prod'
import { Nancy } from '../nancy'
import { Repos } from '../repos'

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  homepage: Nancy;
  repos: Repos;
  repository: any;


  constructor(private http: HttpClient) {
    this.homepage = new Nancy("", "", "")
    this.repos = new Repos("")
  }

  nancyRequest() {
    interface ApiResponse {
      avatar_url: any;
      login: string;
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/Nancy-Muthinzi?access_token=" + "446e0de6c96a052c10a5ad804533f3483831daed").toPromise().then(response => {
        this.homepage.avatar_url = response.avatar_url
        this.homepage.login = response.login
        console.log(this.homepage.repos)
        resolve()
      },
        error => {
          this.homepage.avatar_url = "not found"
          this.homepage.login = "not found"
          this.homepage.repos = "not found"
          reject(error)
        }
      )
    })
    return Promise
  }

    reposRequest() {
      interface ApiResponse {
        repos: any;
      }
      let promise = new Promise((resolve, reject) => {
        this.http.get<ApiResponse>("https://api.github.com/users/Nancy-Muthinzi/repos?access_token=" + environment.apiUrl).toPromise().then(response => {
          this.repository = response
          console.log(this.homepage.repos)
          resolve()
        },
          error => {
            this.homepage.repos = "not found"
            reject(error)
          }
        )
      })
      return Promise
    }
  }
