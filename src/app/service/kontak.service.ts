import { Injectable } from '@angular/core';
import { Kontak } from '../model/kontak';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KontakService {

  private kontakUrl: string = 'http://localhost:3005/kontak';

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  }

  getKontak(): Observable<Kontak[]>{
    return this.http.get<Kontak[]>(this.kontakUrl);
  }

  getKontakDetail(id: number): Observable<Kontak>{
    const urlByID = `${this.kontakUrl}/${id}`
    return this.http.get<Kontak>(urlByID) // 
  }

  addKontakService(kontak: Kontak): Observable<Kontak>{
    return this.http.post<Kontak>(this.kontakUrl, kontak, this.httpOptions)
  }

  deleteKontakService(id: number): Observable<Kontak>{
    const urlByID = `${this.kontakUrl}/${id}`
    return this.http.delete<Kontak>(urlByID)
  }
}
