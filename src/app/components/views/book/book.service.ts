import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  //All books, not used yed
  findAll():Observable<Book[]>{
    const url = `${this.baseUrl}/books`
    return this.http.get<Book[]>(url)
  }

  findAllByCategory(id_cat:String): Observable<Book[]>{
    const url = `${this.baseUrl}books/category/${id_cat}`
    return this.http.get<Book[]>(url)
  }

  create(book: Book, id_cat: String): Observable<Book>{
    const url = `${this.baseUrl}books?category=${id_cat}`
    return this.http.post<Book>(url, book);
  }



}
