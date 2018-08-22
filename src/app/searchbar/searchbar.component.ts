import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RequestService } from '../github-http/request.service';
import { Github } from '../github'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  providers: [RequestService],
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  searchbar: Github;

  constructor(private http: HttpClient, public request: RequestService) {
  }

  ngOnInit() {
    // this.request.githubRequest()
    // this.searchbar = this.request.searchbar

    // this.request.githubRequest()
    // this.repository = this.request

    console.log(this.searchbar)
  }
}
