import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stacks } from '../model/stacks.model';

@Injectable({
  providedIn: 'root'
})
export class StacksService {

  apiUrl = 'http://localhost:3333/tasks';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    }),
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getStacks(): Observable<Stacks[]> {
    return this.httpClient.get<Stacks[]>(this.apiUrl)
  }
}
