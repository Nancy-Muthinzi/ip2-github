import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RequestService } from '../github-http/request.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  result$;

  constructor(private http: HttpClient, public request: RequestService) { }

  ngOnInit() {
    this.request.get().subscribe(result => {
      this.result$ = result.data
      console.log(result.data)

    }
}
}
