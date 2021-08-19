import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookReadAllComponent } from './components/views/book/book-read-all/book-read-all.component';
import { CreateCategoryComponent } from './components/views/category/create-category/create-category.component';
import { DeleteCategoryComponent } from './components/views/category/delete-category/delete-category.component';
import { ReadCategoryComponent } from './components/views/category/read-category/read-category.component';
import { UpdateCategoryComponent } from './components/views/category/update-category/update-category.component';
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
  },
  {
    path:'categories/delete/:id',
    component:DeleteCategoryComponent
  },
  {
    path:'categories/update/:id',
    component:UpdateCategoryComponent
  },
  {
    path:'categories/:id_cat/books',
    component:BookReadAllComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
