import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RequestService } from '../github-http/request.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  providers:[RequestService],
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
link: "https://api.github.com/users/Nancy-Muthinzi?access_token=446e0de6c96a052c10a5ad804533f3483831daed";
  private user: any[];
  private repo: any[];

  constructor(private http: HttpClient, public request: RequestService) {
    // this.requestService.getUserInfo().subscribe(user => {
    //   console.log(user);
    //   this.user = user;
    // });
  }

  ngOnInit() {
  }
}
