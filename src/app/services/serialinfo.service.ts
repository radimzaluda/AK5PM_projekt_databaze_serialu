import { Injectable } from '@angular/core';

//moznost pouzit http protokol
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerialinfoService {

  constructor(private http: HttpClient) { }

  getNejlepeHodnoceneSerialy():Observable<any> {

    return this.http.get('');
  }
    
  getSerialInfo(){}
}
