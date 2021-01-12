import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RadiosListComponent } from './radios-list/radios-list.component';

const routes: Routes = [
  {path:'radios/:city', component: RadiosListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
