import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Presentacion } from '../modelos/presentacion';
@Injectable({
  providedIn: 'root'
})
export class PresentacionService {

  presentacionURL = 'http://localhost:8080/educacion/';

  constructor(private httpClient: HttpClient) { }

  public detail(id: number): Observable<Presentacion> {
    return this.httpClient.get<Presentacion>(this.presentacionURL + `detail/${id}`);
  }

  public detailName(fullName: string): Observable<Presentacion> {
    return this.httpClient.get<Presentacion>(this.presentacionURL + `detailname/${fullName}`);
  }
  public lista(): Observable<Presentacion[]> {
    return this.httpClient.get<Presentacion[]>(this.presentacionURL + 'lista');
  }

  public save(presentacion: Presentacion): Observable<any> {
    return this.httpClient.post<any>(this.presentacionURL + 'create', presentacion);
  }

  public update(id: number, presentacion: Presentacion): Observable<any> {
    return this.httpClient.put<any>(this.presentacionURL + `update/${id}`, presentacion);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.presentacionURL + `delete/${id}`);
  }
}
