import { Component,OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import {PokemonService} from 'src/app/service/pokemon.service';
import {PokemonsComponent} from 'src/app/component/pokemons/pokemons.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  pokemon?:Pokemon;
  poke?: string;
  pokemos?: Array<Pokemon>;
  constructor(private pokemonService:PokemonService,private modalService: NgbModal,) { }

  ngOnInit(): void {
    this.pokemonService.get(1).subscribe(data=>{
    this.pokemos=data;

    });

  }
  nuevo() : void{
 {
      const modalRef = this.modalService.open(PokemonsComponent, {size: 'lg'});
      modalRef.result.then((result) => {
        if (result) {
          this.pokemonService.create(result).subscribe(data=>{

          });  
        }
    });

  }

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
