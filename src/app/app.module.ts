import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { RequestService } from './github-http/request.service';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';

import {RoutingModule} from './routing/routing.module'
import { RouterModule, Routes } from '@angular/router';
import { UnderlineDirective } from './underline.directive';
const routes: Routes = [
  { path: "github", component: HomepageComponent },
  { path: "about", component: AboutComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    HomepageComponent,
    AboutComponent,
    UnderlineDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
