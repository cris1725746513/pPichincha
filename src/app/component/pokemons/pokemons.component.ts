import { Pokemon } from './../../model/pokemon';
import { Component, OnInit } from '@angular/core';
import {PokemonService} from 'src/app/service/pokemon.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  private readonly id?: number;
  pokemon?:Pokemon;
  poke?: string;
  pokemos?: Array<Pokemon>;
  constructor(private pokemonService:PokemonService,private activatedRoute: ActivatedRoute,
    private router: Router,) { this.id = this.activatedRoute.snapshot.params['id']; }

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
