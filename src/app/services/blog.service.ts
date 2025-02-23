import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiKey = environment.apiKey; // Debes definir esta clave en environment.ts
  private apiUrl = `https://api-ejemplo.com/datos?apiKey=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getNoticias() {
    return this.http.get(this.apiUrl);
  }
}
