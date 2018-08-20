import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RequestService } from '../github-http/request.service';
import { Nancy } from '../nancy'
import { Repos } from '../repos'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  providers: [RequestService],
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  homepage: Nancy;
  repos: Repos;
  repository: any;

  constructor(private http: HttpClient, public request: RequestService) {
  }

  ngOnInit() {
    this.request.nancyRequest()
    this.homepage=this.request.homepage

    this.request.reposRequest()
    this.repository=this.request
    console.log(this.repository)


    console.log(this.homepage)
  }
}
