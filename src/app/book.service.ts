import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private http = inject(HttpClient);
  private apiUrl = '[https://tu-api.onrender.com/api/v1/books](https://tu-api.onrender.com/api/v1/books)';

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createBook(dataBook: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, dataBook);
  }
}