import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  github$;

  constructor(private http: HttpClient) {
  }

  gitRequest() {
    interface ApiResponse {
      user: string;
      repo: string;
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response => {
        resolve()
      },
      )
    })
    return Promise
  }
}
