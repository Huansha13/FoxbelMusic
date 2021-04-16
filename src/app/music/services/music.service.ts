import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private key: string =  '3bc7b1e3b6msh301ddbc1931fc45p1ed001jsna43053f4fda4';
  private host: string = 'deezerdevs-deezer.p.rapidapi.com';
  private serviceUrl: string = 'https://deezerdevs-deezer.p.rapidapi.com';

  public resultados: any[] = [];

  constructor( private http: HttpClient) { }

  buscarMusic( query: string = ''): void {


    const params = new HttpParams()
      .set('q', query)
      .set('rapidapi-key', this.key)
      .set('rapidapi-host', this.host)
      .set('limit', '10');

    this.http.get(`${this.serviceUrl}/search`, {params})
      .subscribe( (resp: any) => {
        console.log(resp.data);
        this.resultados = resp.data;
      });

  }
}
