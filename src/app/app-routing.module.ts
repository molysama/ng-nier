import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './pages/button/button.component';

const routes: Routes = [
  {
    path: '',
    component: ButtonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
