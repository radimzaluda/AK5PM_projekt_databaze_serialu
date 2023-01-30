import { Injectable } from '@angular/core';

//moznost pouzit http protokol
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'

export interface api{

  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}



@Injectable({
  providedIn: 'root'
})
export class SerialinfoService {

  constructor(private http: HttpClient) { }

  getNejlepeHodnoceneSerialy(page = 1):Observable<api> {

    return this.http.get<api>(`${environment.baseUrl}/tv/popular?api_key=${environment.apiKey}&page=${page}`);
  }
    
  getSerialInfo(id: string|null){

    return this.http.get<any>(
      `${environment.baseUrl}/tv/${id}?api_key=${environment.apiKey}`);
  }
}
