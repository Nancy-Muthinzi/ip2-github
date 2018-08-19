import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
const routes: Routes = [
  { path: "github", component: HomepageComponent },
  { path: "about", component: AboutComponent },
  { path: "", redirectTo: "/github", pathMatch: "full" },
]

@NgModule({
  imports: [
    CommonModule
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutingModule { }
