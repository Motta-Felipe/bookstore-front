import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadCategoryComponent } from './components/views/category/read-category/read-category.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'categories',
    component:ReadCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
