import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-read-category',
  templateUrl: './read-category.component.html',
  styleUrls: ['./read-category.component.css']
})
export class ReadCategoryComponent implements OnInit {

  categories: Category[] = [];

  displayedColumns: string[] = ['id', 'name', 'description', 'books', 'actions'];

  constructor(private service: CategoryService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(response => {
      console.log(response)
      this.categories = response;

    })
  }
}
