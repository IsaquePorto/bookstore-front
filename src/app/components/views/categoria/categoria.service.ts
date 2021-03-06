import { environment } from './../../../../environments/environment';

import { categoria } from './categoria.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = environment.baseUrl

  constructor(private http: HttpClient) { }

  findAll(): Observable<categoria[]> {
    const url = `${this.baseUrl}categorias`
    return this.http.get<categoria[]>(url)
  }
}
