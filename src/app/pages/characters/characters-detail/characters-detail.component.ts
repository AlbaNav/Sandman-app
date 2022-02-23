import { Component, OnInit } from '@angular/core';
import { CharacterInterface} from '../../characters/models/Character';
import { CharactersService } from './../services/characters.service';
import{ ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss']
})
export class CharactersDetailComponent implements OnInit {
  public character!: CharacterInterface;
  constructor( private activatedRoute: ActivatedRoute, private CharactersService: CharactersService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params)=>{
      const idCharacter = params.get('idCharacter');

      this.CharactersService.getCharacter(idCharacter).subscribe((data:any)=> {
        const apiResult: CharacterInterface = data;
        this.character=apiResult;
        console.log("Character", this.character)
      })
    })
  }

}
