import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
