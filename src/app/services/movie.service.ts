import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



 //vygenerováno z wwww stránek http://json2ts.com/
  export interface Result {
      adult: boolean;
      backdrop_path: string;
      genre_ids: number[];
      id: number;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      release_date: string;
      title: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
  }

  export interface RootObject {
      page: number;
      results: Result[];
      total_pages: number;
      total_results: number;
  }



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getNejlepeHodnoceneFilmy(page = 1) : Observable<RootObject>{

    return this.http.get<RootObject>
    (`${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&page=${page}`);
  }

   getFilmInfo(id: string){
  return this.http.get(`${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`);
  }
}
