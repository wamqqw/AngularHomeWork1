import { Component } from '@angular/core';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent {
  title = "Bill Gates";
  information: string = "William Henry Gates III (born October 28, 1955) is an American business magnate, investor, and philanthropist. He is best known for co-founding software giant Microsoft, along with his late childhood friend Paul Allen.[2][3] During his career at Microsoft, Gates held the positions of chairman, chief executive officer (CEO), president and chief software architect, while also being its largest individual shareholder until May 2014.He was a major entrepreneur of the microcomputer revolution of the 1970s and 1980s."
  quotes: string[] = [
    "Patience is a key element of success",
    "If you think your teacher is tough, wait till you get a boss",
    "Life is not fair — get used to it!",
    "Success is a lousy teacher. It seduces smart people into thinking they can’t lose",
    "Be nice to nerds. Chances are you’ll end up working for one",
  ]
}
