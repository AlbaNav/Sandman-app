import { CharactersDetailComponent } from './characters-detail/characters-detail.component';
import { CharactersComponent } from './characters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: CharactersComponent},
  {path: ":idCharacter", component: CharactersDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
