import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCategoryComponent } from './components/views/category/create-category/create-category.component';
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
  },
  {
    path:'categories/create',
    component:CreateCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
