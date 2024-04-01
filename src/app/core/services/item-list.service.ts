import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {

  constructor(private http: HttpClient) { }

  getItem(): Observable<any> {
    return this.http.get<any>("/assets/items.json");
  }
}
