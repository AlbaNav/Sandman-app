import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../pages/characters/services/characters.service';
import { CharacterInterface } from '../characters/models/Character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characters: CharacterInterface[] = [];
    constructor( private CharactersService: CharactersService) { }

  ngOnInit(): void {
    this.CharactersService.getAllCharacters().subscribe((data:any)=>{
      const apiResult: CharacterInterface[] = data;

      const formattedCharacters=apiResult.map(({id, name, alias, family, description, image}) => ({
        id, name, alias, family, description, image
      }));
      this.characters = formattedCharacters
    })
  }

}
