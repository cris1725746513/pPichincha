import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pokemon} from '../model/pokemon';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private path = 'https://bp-pokemons.herokuapp.com/';
  constructor(private httpClient: HttpClient) {
  }

  get(id: number): Observable<Array<Pokemon>> {
    const url = this.path + '?idAuthor=' + id;
    return this.httpClient.get<Array<Pokemon>>(url);
  }

  update(poke: Pokemon): Observable<any> {
    const url = this.path +poke.id;
    return this.httpClient.put(url, poke);
}

delete(poke: Pokemon): Observable<any> {
  const url = this.path + poke.id;
  return this.httpClient.delete(url);
}

create(poke: Pokemon): Observable<any> {
  const url = this.path;
  return this.httpClient.post(url, poke);
}

getbyID(id: number): Observable<Array<Pokemon>> {
  const url = this.path + id;
  return this.httpClient.get<Array<Pokemon>>(url);
}

}
