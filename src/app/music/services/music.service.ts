import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {DeezerSearch, Music} from '../interface/music.interface';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private key: string =  '3bc7b1e3b6msh301ddbc1931fc45p1ed001jsna43053f4fda4';
  private host: string = 'deezerdevs-deezer.p.rapidapi.com';
  private serviceUrl: string = 'https://deezerdevs-deezer.p.rapidapi.com';

  public resultados: Music[] = [];
  public resultadoBaner: Music[] = [];

  constructor( private http: HttpClient) { }

  buscarMusic( query: string = ''): void {
    const params = new HttpParams()
      .set('q', query)
      .set('rapidapi-key', this.key)
      .set('rapidapi-host', this.host)
      .set('limit', '38');
    this.http.get<DeezerSearch>(`${this.serviceUrl}/search`, {params})
      .subscribe( (resp: DeezerSearch) => {
        this.resultados = resp.data;
      });

      this.banerMusic(query);
  }
  
  banerMusic( query: string = ''): void {
    const params = new HttpParams()
      .set('q', query)
      .set('rapidapi-key', this.key)
      .set('rapidapi-host', this.host)
      .set('limit', '1');
    this.http.get<DeezerSearch>(`${this.serviceUrl}/search`, {params})
      .subscribe((resp: DeezerSearch) => {
        this.resultadoBaner = resp.data;
      });
  }
}
