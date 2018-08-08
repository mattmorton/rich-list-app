import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(
    private http: HttpClient
  ) {

  }

  getRichList() {
    const url = '../assets/richList.json';
    return this.http.get(url);
  }
}
