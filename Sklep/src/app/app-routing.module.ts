import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArtykulyComponent} from "./artykuly/artykuly.component";
import {DodajArtykulComponent} from "./dodaj-artykul/dodaj-artykul.component";
import {ONasComponent} from "./o-nas/o-nas.component";

const routes: Routes = [
  {path: "", redirectTo: '/home', pathMatch: 'full'},
  {path: "artykuly", component: ArtykulyComponent},
  {path: "dodaj-artykul", component: DodajArtykulComponent},
  {path: "o-nas", component: ONasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}