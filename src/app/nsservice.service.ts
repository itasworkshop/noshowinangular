import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Data } from './data';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NsserviceService {

  private dataUrl = 'api/dataAll';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getData(): Observable<any> {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$",this.http.get(this.dataUrl));
    return this.http.get('api/dataAll');
  }

  getListofmanagerdata():Observable<any>{    
    return this.http.get('api/managerlist');
  }

  getamanagerdata(){    
    return this.http.get('api/managerdata');
  }

  /* getData():Observable<any>{
    return this.http.get('http://localhost:52213/api/noshow/GetNoShowsCount')
  } 

  getListofmanagerdata():Observable<any>{
    return this.http.get('http://localhot:52213/api/noshow/GetAllmanager')
  }

  getamanagerdata(rqstobj){
    return this.http.post('http://localhost:52213/api/noshow/GetAllParams',rqstobj)
  }*/

  
}    