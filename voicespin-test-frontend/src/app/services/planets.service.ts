import { HttpClient } from '@angular/common/http';
import { IPlanet } from './../interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(
    private http: HttpClient
  ) { }

  getPlanets(): Observable<IPlanet[]> {
    return this.http.get<IPlanet[]>(environment.apiUrl);
  }
}
