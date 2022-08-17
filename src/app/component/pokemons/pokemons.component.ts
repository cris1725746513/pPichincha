import { Pokemon } from './../../model/pokemon';
import { Component, OnInit } from '@angular/core';
import {PokemonService} from 'src/app/service/pokemon.service';
@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemon?:Pokemon;
  poke?: string;
  pokemos?: Array<Pokemon>;
  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.get(1).subscribe(data=>{
    this.pokemos=data;

    });

  }

  nuevo() {


}
eliminar(poke:Pokemon) {

  this.pokemonService.delete(poke).subscribe(data=>{

  });

}
actualizar(poke:Pokemon) {
  this.pokemonService.update(poke).subscribe(data=>{

  });
}

}
