import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { CharactersRoutingModule } from '../characters/characters-routing.module';
import { CharactersComponent } from '../characters/characters.component';
import { CharactersDetailComponent } from '../characters/characters-detail/characters-detail.component';


@NgModule({
  declarations: [
    CharactersComponent,
    CharactersDetailComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    HttpClientModule
  ]
})
export class CharactersModule { }
