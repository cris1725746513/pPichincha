import { Component,OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import {PokemonService} from 'src/app/service/pokemon.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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
eliminar() {

}
actualizar() {

}

}
