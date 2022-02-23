import { Component, OnInit, Input } from '@angular/core';
import { FooterInterface } from '../../models/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() footer!: FooterInterface;
  public btnText:string= '🌙'

  constructor() { }

  ngOnInit(): void {
  }
  public setDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
    this.btnText== '🌙' ? this.btnText = '⭐' : this.btnText = '🌙'
  }

}

