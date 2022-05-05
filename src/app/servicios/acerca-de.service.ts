import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AcercaDe } from '../modelos/acerca-de-modelo';
@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  productoURL = 'http://localhost:8080/educacion/';

  constructor(private httpClient: HttpClient) { }

  public detail(id: number): Observable<AcercaDe> {
    return this.httpClient.get<AcercaDe>(this.productoURL + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<AcercaDe> {
    return this.httpClient.get<AcercaDe>(this.productoURL + `detailname/${nombre}`);
  }
  public lista(): Observable<AcercaDe[]> {
    return this.httpClient.get<AcercaDe[]>(this.productoURL + 'lista');
  }

  public save(producto: AcercaDe): Observable<any> {
    return this.httpClient.post<any>(this.productoURL + 'create', producto);
  }

  public update(id: number, producto: AcercaDe): Observable<any> {
    return this.httpClient.put<any>(this.productoURL + `update/${id}`, producto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.productoURL + `delete/${id}`);
  }
}

