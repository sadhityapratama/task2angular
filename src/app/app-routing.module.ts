import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KontakComponent } from './kontak/kontak.component';
import { KontakDetailComponent } from './kontak-detail/kontak-detail.component';
import { AddKontakFormComponent } from './add-kontak-form/add-kontak-form.component';

const routes: Routes = [
  // {path: 'kontak', component: KontakComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: KontakComponent},
  {path: 'add', component: AddKontakFormComponent},
  {path: 'detail/:id', component: KontakDetailComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
