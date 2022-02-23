import { Component } from '@angular/core';
import { NavigatorInterface, FooterInterface } from './core/models/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sandman-app';
  public navigator: NavigatorInterface[]=[
    {
      name:"home",
      link:"/home"
    },
    {
      name: "characters",
      link:"/characters"
    },
    {
      name: "about",
      link:"/about"
    }
  ];
  public footer: FooterInterface = {
    creator: "AlbaNav",
    for: "Upgrade Hub"
  }
}
