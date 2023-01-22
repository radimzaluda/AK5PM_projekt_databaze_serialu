import { Injectable } from '@angular/core';

//moznost pouzit http protokol
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SerialinfoService {

  constructor(private http: HttpClient) { }

  getNejlepeHodnoceneSerialy():Observable<any> {

    return this.http.get(`${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}`);
  }
    
  getSerialInfo(){}
}
